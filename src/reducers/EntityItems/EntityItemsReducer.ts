import {IEntityItem} from "../../entities/EntityItem";
import {Sort} from "../../entities/Sort";
import {IEntityItemsActions} from "../../store/EntityItemsActions";
import {FETCH_ENTITY_ITEMS, FIND_ENTITY_ITEMS_BY_NAME, SORT_ENTITY_ITEMS} from "../../store/EntityItemsStore";
import {sortEntityItems} from "../../actions/EntityItemsAction";
import {EntityItemsNameFilter} from "./EntityItemsNameFilter";

export interface IEntityItemsReducer {
    entityItems: IEntityItem[],
    sort: Sort,
}

const defaultState = (): IEntityItemsReducer => ({
    entityItems: [],
    sort: Sort.DESC,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: IEntityItemsActions) => {
    if (action.type === FETCH_ENTITY_ITEMS) {
        return {
            sort: action.FETCH_ENTITY_ITEMS.sort,
            entityItems: action.FETCH_ENTITY_ITEMS.entityItems,
        };
    }

    if (action.type === SORT_ENTITY_ITEMS) {
        if (state.sort !== action.SORT_ENTITY_ITEMS.sort) {
            const entityItems = sortEntityItems(state.entityItems, action.SORT_ENTITY_ITEMS.sort);

            return {
                sort: action.SORT_ENTITY_ITEMS.sort,
                entityItems: entityItems,
            };
        }
    }

    if (action.type === FIND_ENTITY_ITEMS_BY_NAME) {
        let entityItems = EntityItemsNameFilter.findByName(
            action.FIND_ENTITY_ITEMS_BY_NAME.entityItems,
            action.FIND_ENTITY_ITEMS_BY_NAME.name,
        );

        entityItems = sortEntityItems(entityItems, action.FIND_ENTITY_ITEMS_BY_NAME.sort);

        return {
            sort: action.FIND_ENTITY_ITEMS_BY_NAME.sort,
            entityItems: entityItems,
        };
    }

    return state;
}