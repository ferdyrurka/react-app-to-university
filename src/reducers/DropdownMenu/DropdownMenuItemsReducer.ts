import {MenuItems, MenuSectionItems} from "./MenuItems";
import {FIND_ITEMS} from "../../store/DropdownMenuItemsActions";
import {DropdownMenuItemsAction} from "../../store/DropdownMenuItemsStore";

export interface IDropdownMenuItemsReducer {
    items: MenuSectionItems[],
}

const defaultState = (): IDropdownMenuItemsReducer => ({
    items: MenuItems.getAll(),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: DropdownMenuItemsAction) => {
    if (action.type === FIND_ITEMS) {
        if (action.FIND_ITEMS.searchValue !== null) {
            return {
                items: MenuItems.findByTitle(action.FIND_ITEMS.searchValue),
            }
        }
    }

    return defaultState();
}
