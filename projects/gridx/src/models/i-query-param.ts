import { IFilter } from './i-filter';
import { ISortEvent } from './i-sort-event';

export interface IQueryParam {
    viewId?: string;
    pagination?: { page?: number; limit?: number };
    sorting?: Array<ISortEvent>;
    keyword?: string;
    filters?: Array<IFilter>;
    filterLogic?: string;
    extrasQueryParams?: { [key: string]: any };
}
