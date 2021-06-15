import {IPhoto} from "../entities/Photo";
import {IEntityItem} from "../entities/EntityItem";
import {Sort} from "../entities/Sort";

const TEN_HARDCODE_NAMES = [
    'ABC Generic Comapany',
    'World Company SAS',
    'Foo Bar Company',
    'Native Company',
    'Subsid Corp',
    'Comapany Bar',
    'Bar Foo',
    'SubStr',
    'Zip',
    'Poland Corp',
];

export function findFirstThirtyEntityItems(photos: IPhoto[], sort: Sort = Sort.DESC): IEntityItem[] {
    const result: IEntityItem[] = [];

    if (photos.length === 0) {
        return result;
    }

    let names = TEN_HARDCODE_NAMES.values();

    for (let i: number = 0;i < 30; i++) {
        let name = names.next().value;
        if (!name) {
            names = TEN_HARDCODE_NAMES.values();
            name = names.next().value;
        }

        result.push({
            name: name,
            photo: photos[i].url,
        });
    }

    result.sort((a: IEntityItem, b: IEntityItem) => {
        if(a.name < b.name)
            return -1;

        if(a.name > b.name)
            return 1;

        return 0;
    });

    if (sort === Sort.ASC) {
        result.reverse();
    }

    return result;
}
