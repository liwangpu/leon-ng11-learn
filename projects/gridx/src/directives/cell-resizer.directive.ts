import { HostListener, NgZone, OnDestroy, Injector, ElementRef, Renderer2, HostBinding, Directive, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import * as fromUtil from '../utils';
import * as fromToken from '../tokens';

@Directive({
  selector: '[cellResizer]'
})
export class CellResizerDirective implements OnDestroy {

  @Output()
  public readonly afterResize: EventEmitter<number> = new EventEmitter<number>();
  private size: number = 0;
  @HostBinding('style.width.px')
  private resizerSize: number = 4;
  private resizeEnd: any;
  private handlerRelease: Subject<void> = new Subject<void>();
  @fromUtil.LazyService(NgZone)
  private zone: NgZone;
  @fromUtil.LazyService(Renderer2)
  private readonly renderer2: Renderer2;
  @fromUtil.LazyService(fromToken.CELL_RESIZE_FLAG_HANDLER)
  private cellResizeFlagHander: fromToken.ICellResizeFlagHandler;
  public constructor(
    protected el: ElementRef,
    protected injector: Injector
  ) {
    this.handlerRelease.subscribe(() => {
      window.removeEventListener('mouseup', this.resizeEnd);
    });
  }

  public ngOnDestroy(): void {
    this.handlerRelease.complete();
    this.handlerRelease.unsubscribe();
    this.resizeEnd = undefined;
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(evt: any): void {
    evt.stopPropagation();
    this.zone.runOutsideAngular(() => {
      const thminWidth: number = 100;
      const snapline: ElementRef = this.cellResizeFlagHander.getSnapline();
      const snaplineNe = snapline.nativeElement;
      const snaplineClientRect: DOMRect = snaplineNe.getBoundingClientRect();
      const thNode: HTMLElement = this.el.nativeElement.parentElement.parentElement;
      const thNodeClientRect: DOMRect = thNode.getBoundingClientRect();
      let showSnapline: boolean = false;

      const resize: (e: any) => void = e => {
        e.stopPropagation();
        let thw: number = e.pageX - thNodeClientRect.left + this.resizerSize;
        this.renderer2.setStyle(snaplineNe, 'left', `${e.pageX - snaplineClientRect.left + this.resizerSize}px`);
        if (!showSnapline) {
          this.renderer2.setStyle(snaplineNe, 'opacity', 1);
          showSnapline = true;
        }
        // 太小了就不调了
        if (Math.abs(thw - thNodeClientRect.width) < 4) {
          thw = thNodeClientRect.width;
        }
        if (thw < thminWidth) {
          thw = thminWidth;
        }
        this.size = thw;
        // console.log('resizing');
      };

      window.addEventListener('mousemove', resize);

      const resizeEnd: (e: any) => void = e => {
        e.stopPropagation();
        this.handlerRelease.next();
        window.removeEventListener('mousemove', resize);
        showSnapline = false;
        this.renderer2.setStyle(snaplineNe, 'opacity', 0);
        this.renderer2.setStyle(snaplineNe, 'left', 0);
        // console.log('resize end', this.size);
        this.zone.run(() => this.afterResize.next(this.size));
      };
      this.resizeEnd = resizeEnd;

      window.addEventListener('mouseup', resizeEnd);
    });
  }

}
