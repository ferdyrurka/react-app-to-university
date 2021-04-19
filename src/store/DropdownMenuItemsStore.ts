import {FIND_ITEMS} from "../actions/DropdownMenuItemsActions";
import {BaseSyntheticEvent} from "react";

export function findItemsAction(input: BaseSyntheticEvent): {type: string|null, searchValue: string|null} {
    const searchValue = input.target.value;

    if (searchValue.length >= 1) {
        return {
            type: FIND_ITEMS,
            searchValue,
        };
    }

    return {
        type: null,
        searchValue: null,
    };
}
