import styled from "styled-components";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import {CarouselFlex} from "../../styledHelpers/Components";
import {LineHeight} from "../../styledHelpers/LineHeight";

const BasicDataActionContainer = styled(CarouselFlex)`
  padding-top: 15px;
  
  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    justify-content: flex-end;
  }
`;

const BasicDataActionItem = styled.a`
  display: flex;
  align-items: center;

  white-space: nowrap;
  text-decoration: none;
  
  &:nth-child(2) {
    margin: 0 10px;
  }
  
  span {
    font-size: ${FontSize["16"]};
    line-height: ${LineHeight["16"]};
    color: ${Colors.black};

    margin-left: 6px;
  }
  
  img {
    width: 17px;
    height: auto;
    max-height: 15px;
  }
`;

function Action() {
    return (
        <BasicDataActionContainer>
            <BasicDataActionItem href="test">
                <img src="media/icons/bell.png" alt="message"/>
                <span>Message</span>
            </BasicDataActionItem>

            <BasicDataActionItem href="test">
                <img src="media/icons/entities.png" alt="request"/>
                <span>Create a request</span>
            </BasicDataActionItem>

            <BasicDataActionItem href="test">
                <img src="media/icons/plus.png" alt="add"/>
                <span>Add to a cluster</span>
            </BasicDataActionItem>
        </BasicDataActionContainer>
    );
}

export default Action;
