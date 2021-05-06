import React, {useState} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {fetchCurrentUser} from "../../actions/UserAction";
import {User} from "../../entities/user";

const PersonalDataWrapper = styled.div`
  padding: 5px;

  h2 {
    font-weight: bold;
    color: ${Colors.blue};
    text-align: center;
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
    fetchCurrentUser().then(currentUser => setUser(currentUser));

    return (

        <PersonalDataWrapper>
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
