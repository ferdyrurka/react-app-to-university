import {IUser} from "../../entities/User";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import BasicData from "../../component/Profile/BasicData";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

const ProfileContainer = styled.main`
  padding: 0 20px;
  background-color: ${Colors.white};
`;

function Profile() {
    let user: IUser | null = useSelector(
        (state: IState) => state.currentUser.user,
        shallowEqual
    );

    return (
      <ProfileContainer>
          <BasicData user={user}/>
      </ProfileContainer>
    );
}

export default Profile;