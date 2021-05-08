import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {FlexColumn} from "../../styledHelpers/Grid";
import {Link} from "../../styledHelpers/Components";
import {MenuItem} from "../../reducers/DropdownMenu/MenuItems";

const DropdownMenuItemWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  color: ${Colors.black};

  .description {
    color: ${Colors.blue};
    font-size: ${FontSize["14"]};
    margin-top: 5px;
  }
`;

const DropdownMenuIcon = styled.img`
  width: 25px;
  height: auto;
  margin-right: 15px;
`;

interface DropdownMenuItemProps {
    item: MenuItem,
}

const DropdownMenuItem: FC<DropdownMenuItemProps> = props => {
    const item = props.item;

    return (
        <DropdownMenuItemWrapper href={item.href}>
            <DropdownMenuIcon src={item.icon} alt={item.title.toLowerCase()}/>

            {item.description.length === 0 &&
                <span>{item.title}</span>
            }

            {item.description.length > 0 &&
                <FlexColumn>
                    <span>{item.title}</span>
                    <span className="description">{item.description}</span>
                </FlexColumn>
            }
        </DropdownMenuItemWrapper>
    );
}

export default DropdownMenuItem;