import {IUser} from "../../entities/User";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import BasicData from "../../component/Profile/BasicData";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import Action from "../../component/Profile/Action";
import SkillsAndInformation from "../../component/Profile/SkillsAndInformation";
import PanelInformations from "../../component/Profile/PanelInformations";
import Proposals from "../../component/Profile/Proposals";

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
          <Action/>
          <BasicData user={user}/>
          <SkillsAndInformation/>
          <PanelInformations/>
          <Proposals/>
      </ProfileContainer>
    );
}

export default Profile;