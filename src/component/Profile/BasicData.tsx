import React, {FC} from "react";
import {IUser} from "../../entities/User";
import styled from "styled-components";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";
import {FlexColumn} from "../../styledHelpers/Grid";
import {CarouselFlex, EditIcon} from "../../styledHelpers/Components";
import {LineHeight} from "../../styledHelpers/LineHeight";

interface BasicDataProps {
    user: IUser | null,
}

const BasicDataContainer = styled(CarouselFlex)`
  height: 150px;
  padding: 30px 0;
`;

const BasicDataSeeProfileWrapper = styled.div`
  width: 90px;
  
  img {
    width: 75px;
    height: auto;
    border-radius: 50%;
  }
  
  a {
    font-size: ${FontSize["16"]};
    color: ${Colors.lightBlue};
    text-decoration: none;
  }
`;

const BasicDataPersonalDetailsWrapper = styled(FlexColumn)`
  width: 180px;
  justify-content: space-evenly;
  margin-left: 15px;
  
  .bold {
    font-weight: bold;
  }
`;

const BasicDataEditContactDataWrapper = styled(FlexColumn)`
  margin-left: auto;
  padding-left: 20px;
`;

const BasicDataContactData = styled(FlexColumn)`
  justify-content: space-evenly;
  height: 50%;
  width: 220px;

  margin-right: 5px;
`;

const BasicDataEditIcon = styled(EditIcon)`
  height: 50%;
`;

const BasicDataSpan = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: ${FontSize["16"]};
  line-height: ${LineHeight["16"]};
`;

const BasicData: FC<BasicDataProps> = props => {
    const user = props.user;

    if (user === null) {
        return (<span/>);
    }

    return (
        <BasicDataContainer>
            <BasicDataSeeProfileWrapper>
                <img src={user.avatarUrl !== null ? user.avatarUrl : ''} alt="avatar logo"/>
                <a href="/profile">See profile</a>
            </BasicDataSeeProfileWrapper>

            <BasicDataPersonalDetailsWrapper>
                <BasicDataSpan className="bold">{user.name}</BasicDataSpan>
                <BasicDataSpan className="bold">{user.company.name}</BasicDataSpan>
                <BasicDataSpan>{user.address.city}</BasicDataSpan>
                <BasicDataSpan>{user.company.catchPhrase}</BasicDataSpan>
            </BasicDataPersonalDetailsWrapper>

            <BasicDataEditContactDataWrapper>
                <BasicDataEditIcon>
                    <i className="bi bi-pencil"/>
                </BasicDataEditIcon>

                <BasicDataContactData>
                    <BasicDataSpan>{user.email}</BasicDataSpan>
                    <BasicDataSpan>{user.phone}</BasicDataSpan>
                </BasicDataContactData>
            </BasicDataEditContactDataWrapper>
        </BasicDataContainer>
    );
}

export default BasicData;