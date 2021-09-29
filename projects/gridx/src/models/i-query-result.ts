export interface IQueryResult<T = any> {
    count?: number;
    offset?: number;
    limit?: number;
    total?: number;
    items?: Array<T>;
}
