import {MenuItems} from "../../component/TopNav/MenuItems";
import {FIND_ITEMS} from "../../actions/DropdownMenuItemsActions";

export interface IDropdownMenuItemsReducer {
    items: {title: string, items: {icon: string, title: string, href: string, description: string}[]}[]
}

const defaultState = (): IDropdownMenuItemsReducer => ({
    items: MenuItems.getAll(),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: {type: string|null, searchValue: string|null}) => {
    if (action.type === FIND_ITEMS) {
        if (action.searchValue !== null) {
            return {
                items: MenuItems.findByTitle(action.searchValue),
            }
        }
    }

    return defaultState();
}
