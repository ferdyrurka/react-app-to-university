import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {MenuItem, MenuSectionItems} from "../../reducers/DropdownMenu/MenuItems";
import DropdownMenuItem from "./DropdownMenuItem";

const DropdownMenuItemsWrapper = styled.div`
  padding: 0 10px;

  &:nth-child(3) {
    border-bottom: 1px solid ${Colors.lightGrey};
    padding-bottom: 5px;
  }

  .section-name {
    margin-top: 5px;

    span {
      font-size: ${FontSize["12"]};
      color: ${Colors.grey};
    }
  }
`;

interface DropdownMenuSectionItemsProps {
    itemsGroup: MenuSectionItems,
}

const DropdownMenuSectionItems: FC<DropdownMenuSectionItemsProps> = props => {
    const itemGroup = props.itemsGroup;

    return (
        <DropdownMenuItemsWrapper>
            <div className="section-name">
                <span>{itemGroup.title}</span>
            </div>

            {itemGroup.items.map(
                (item: MenuItem, index: number) => {
                    return (
                        <DropdownMenuItem key={index.toString()} item={item}/>
                    );
                }
            )}
        </DropdownMenuItemsWrapper>
    );
}

export default DropdownMenuSectionItems;