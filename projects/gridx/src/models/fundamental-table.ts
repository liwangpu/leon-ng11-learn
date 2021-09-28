import { ChangeDetectorRef, Directive, Injector, OnDestroy, OnInit } from "@angular/core";
import { SubSink } from "subsink";
import * as fromModel from '../models';
import * as fromUtil from '../utils';
import * as fromService from '../services';
import * as fromEnum from "../enums";

@Directive()
export abstract class FundamentalTable implements OnInit, OnDestroy {

    public seqColumn?: fromModel.IGridColumn;
    public operationColumn?: fromModel.IGridColumn;
    public columns: Array<fromModel.IGridColumn>;
    public staticColumns: Array<fromModel.IGridColumn>;
    @fromUtil.LazyService(fromService.GridStoreService)
    protected readonly store: fromService.GridStoreService;
    @fromUtil.LazyService(ChangeDetectorRef)
    protected readonly cd: ChangeDetectorRef;
    protected subs = new SubSink();
    public constructor(
        protected injector: Injector
    ) { }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public ngOnInit(): void {
        this.subs.sink = this.store.columns$.subscribe(cols => {
            this.columns = cols;
            // console.log('cols:', cols);
            this.cd.markForCheck();
        });

        this.subs.sink = this.store.staticColumns$.subscribe(cols => {
            this.staticColumns = cols;
            this.seqColumn = cols?.find(c => c.field === fromEnum.StaticColumnType.seq);
            this.operationColumn = cols?.find(c => c.field === fromEnum.StaticColumnType.operation);
            // console.log(1, this.showNoColumn);
            // console.log('static columns:', cols);
            this.cd.markForCheck();
        });
    }

    public trackByFieldFn(index: number, it: fromModel.IGridColumn): string {
        return it.field;
    }

    private checkStaticColumnVisibility(field: fromEnum.StaticColumnType): boolean {
        return this.staticColumns?.some(c => c.field === field && !c.hidden)
    }
}
