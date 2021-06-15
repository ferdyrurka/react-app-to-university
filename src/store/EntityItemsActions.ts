import {FETCH_ENTITY_ITEMS, FIND_ENTITY_ITEMS_BY_NAME, SORT_ENTITY_ITEMS} from "./EntityItemsStore";
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
    FIND_ENTITY_ITEMS_BY_NAME: {
        entityItems: IEntityItem[],
        sort: Sort,
        name: string,
    }
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
        FIND_ENTITY_ITEMS_BY_NAME: {
             entityItems,
             sort,
             name: ''
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

export function findEntityItemsAction(
    entityItems: IEntityItem[],
    sort: Sort,
    input: HTMLInputElement,
) {
    return {
        FIND_ENTITY_ITEMS_BY_NAME: {
            entityItems,
            sort,
            name: input.value,
        },
        type: FIND_ENTITY_ITEMS_BY_NAME,
    }
}
