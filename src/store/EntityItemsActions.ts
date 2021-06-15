import {FETCH_ENTITY_ITEMS, SORT_ENTITY_ITEMS} from "./EntityItemsStore";
import {IEntityItem} from "../entities/EntityItem";
import {Sort} from "../entities/Sort";

export interface IEntityItemsActions {
    FETCH_ENTITY_ITEMS: {
        entityItems: IEntityItem[],
        sort: Sort,
    };
    SORT_ENTITY_ITEMS: {
        sort: Sort,
    };
    type: string | null,
}

export function fetchEntityItemsAction(entityItems: IEntityItem[], sort: Sort) {
    return {
        FETCH_ENTITY_ITEMS: {
            entityItems,
            sort,
        },
        SORT_ENTITY_ITEMS: {
            sort,
        },
        type: FETCH_ENTITY_ITEMS,
    };
}

export function sortEntityItemsAction(sort: Sort) {
    return {
        SORT_ENTITY_ITEMS: {
            sort,
        },
        type: SORT_ENTITY_ITEMS,
    };
}
