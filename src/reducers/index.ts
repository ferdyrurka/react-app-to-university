import { combineReducers } from 'redux';
import items, {IDropdownMenuItemsReducer} from './DropdownMenu/DropdownMenuItemsReducer';
import comments, {IFilterCommentsReducer} from "./Comments/FilterCommentsReducer";
import users, {IUsersReducer} from "./Users/UsersReducer";
import photos, {IPhotosReducer} from "./Photo/PhotosReducer";
import currentUser, {ICurrentUserReducer} from "./CurrentUser/CurrentUserReducer";

export default combineReducers({
    items,
    comments,
    users,
    photos,
    currentUser,
})

export interface IState {
    items: IDropdownMenuItemsReducer,
    comments: IFilterCommentsReducer,
    users: IUsersReducer,
    photos: IPhotosReducer,
    currentUser: ICurrentUserReducer,
}
