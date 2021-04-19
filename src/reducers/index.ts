import { combineReducers } from 'redux';
import items, {IDropdownMenuItemsReducer} from './DropdownMenu/DropdownMenuItemsReducer';

export default combineReducers({
    items,
})

export interface IState {
    items: IDropdownMenuItemsReducer,
}
