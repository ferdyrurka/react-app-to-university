import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {fetchUserById} from "../../actions/UserAction";
import {User} from "../../entities/user";

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
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        fetchUserById(1).then(currentUser => setUser(currentUser));
    }, []);

    return (
        <PersonalDataWrapper>
            <div className="avatar-wrapper">
                {user != null && <img src={user.avatarUrl} alt="avatar logo"/>}
            </div>
            {user != null && <h2>{user.name}</h2>}

            {user != null &&
                <div className="job-title-wrapper">
                    <span>{user.company.catchPhrase}</span>
                </div>
            }
        </PersonalDataWrapper>
    );
}

export default PersonalData;
