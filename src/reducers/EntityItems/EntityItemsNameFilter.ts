import {IEntityItem} from "../../entities/EntityItem";

export class EntityItemsNameFilter
{
    public static findByName(
        entityItems: IEntityItem[],
        name: string,
    ): IEntityItem[]  {
        name = name.toLowerCase();

        return entityItems.filter(
            entityItem => entityItem.name.toLowerCase().indexOf(name) > -1
        );
    }
}
