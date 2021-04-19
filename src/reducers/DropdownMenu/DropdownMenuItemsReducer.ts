import {MenuItems, MenuSectionItems} from "../../component/TopNav/MenuItems";
import {FIND_ITEMS} from "../../actions/DropdownMenuItemsActions";
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
        if (action.searchValue !== null) {
            return {
                items: MenuItems.findByTitle(action.searchValue),
            }
        }
    }

    return defaultState();
}
