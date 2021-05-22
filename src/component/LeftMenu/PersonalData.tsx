import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {User} from "../../entities/User";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";

const PersonalDataWrapper = styled.div`
  padding: 5px;

  h2 {
    font-weight: bold;
    color: ${Colors.blue};
    text-align: center;
  }

  .avatar-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      width: 75px;
      height: auto;
      border-radius: 50%;
    }
  }

  .job-title-wrapper {
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;

    span {
      color: ${Colors.grey};
    }
  }
`;


function PersonalData() {
    let user: User | null = useSelector(
        (state: IState) => state.currentUser.user,
        shallowEqual
    );

    return (
        <PersonalDataWrapper>
            {user !== null &&
                <div className="avatar-wrapper">
                    {<img src={user.avatarUrl !== null ? user.avatarUrl : ''} alt="avatar logo"/>}
                </div>
            }

            {user !== null && <h2>{user.name}</h2>}

            {user !== null &&
                <div className="job-title-wrapper">
                    <span>{user.company.catchPhrase}</span>
                </div>
            }
        </PersonalDataWrapper>
    );
}

export default PersonalData;
