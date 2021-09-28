import { Directive, Injector } from "@angular/core";
import { FundamentalTable } from "./fundamental-table";
import * as fromToken from '../tokens';
import * as fromUtil from '../utils';

@Directive()
export abstract class DataTable extends FundamentalTable {

    @fromUtil.LazyService(fromToken.ID_PROPERTY)
    private idPropery: string;
    public datas: Array<{ [key: string]: any }>;
    public rowHeight: number = 34;
    public constructor(
        protected injector: Injector
    ) {
        super(injector);
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public ngOnInit(): void {
        super.ngOnInit();

        this.subs.sink = this.store.datas$.subscribe(datas => {
            this.datas = datas;
            this.cd.markForCheck();
        });

        this.subs.sink = this.store.contentTableRowHeight$.subscribe(rowHeight => {
            this.rowHeight = rowHeight;
            this.cd.markForCheck();
        });
    }

    public trackByIdPropertyFn(index: number, it: { [key: string]: any }): string {
        return it[this.idPropery];
    }
}
