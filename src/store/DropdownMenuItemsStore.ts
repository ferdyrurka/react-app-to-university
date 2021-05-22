import {FIND_ITEMS} from "./DropdownMenuItemsActions";
import {BaseSyntheticEvent} from "react";

export interface DropdownMenuItemsAction {
    type: string|null,
    FIND_ITEMS: {
        searchValue: string|null,
    }
}

export function findItemsAction(input: BaseSyntheticEvent): DropdownMenuItemsAction {
    const searchValue = input.target.value;

    if (searchValue.length >= 1) {
        return {
            type: FIND_ITEMS,
            FIND_ITEMS: {searchValue},
        };
    }

    return {
        type: null,
        FIND_ITEMS: {
            searchValue: null,
        },
    };
}

export function reset() {
    return {
        type: null,
        searchValue: null,
    };
}
