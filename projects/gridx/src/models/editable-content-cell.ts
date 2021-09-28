import { Injector } from "@angular/core";
import * as fromToken from "../tokens";
import * as fromUtil from '../utils';

export abstract class EditableContentCell {

    @fromUtil.LazyService(fromToken.CELL_METADATA)
    public readonly metadata: fromToken.ICellMetadata;

    public constructor(
        protected injector: Injector
    ) {

    }

}
