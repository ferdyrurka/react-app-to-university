import { combineReducers } from 'redux';
import items, {IDropdownMenuItemsReducer} from './DropdownMenu/DropdownMenuItemsReducer';
import comments, {IFilterCommentsReducer} from "./Comments/FilterCommentsReducer";

export default combineReducers({
    items,
    comments,
})

export interface IState {
    items: IDropdownMenuItemsReducer,
    comments: IFilterCommentsReducer,
}
