import styled from "styled-components";
import {FlexColumn} from "../../styledHelpers/Grid";
import {Colors} from "../../styledHelpers/Colors";
import React from "react";
import {FontSize} from "../../styledHelpers/FontSizes";
import {CarouselFlex, EditIcon} from "../../styledHelpers/Components";

const PanelInformationsContainer = styled(FlexColumn)`
  padding-top: 15px;
  padding-bottom: 5px;
  position: relative;

  border-top: ${Colors.lightGrey} 1px solid;

  h1 {
    font-size: ${FontSize["18"]};
  }
`;

const PanelInformationsWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;

  h2 {
    width: 100%;
    margin-bottom: 10px;
    color: ${Colors.grey};
  }

  span {
    color: ${Colors.darkGrey};
  }
`;

const PanelInformationsAttachment = styled.div`
  margin-top: 10px;
  padding: 8px 5px;

  background-color: #F4F5FA;

  i {
    margin-right: 10px;
  }
`;

const PanelInformationsCorrespondant = styled(CarouselFlex)`
  display: flex;
  margin-top: 2px;
  padding: 8px 5px;
  background-color: #F4F5FA;
  
  align-items: center;
  
  a {
    margin-left: 15px;
    
    padding-right: 5px;
    white-space: nowrap;
    text-decoration: none;
    color: ${Colors.darkGrey};

    i {
      margin-right: 5px;
    }
  }
`;

const PanelInformationsCorrespondantUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  img {
    height: auto;
    width: 40px;
    border-radius: 50%;
  }

  span {
    white-space: nowrap;
    font-weight: bold;
    margin-left: 10px;
  }
`;

function PanelInformations() {
    return (
        <PanelInformationsContainer>
            <EditIcon>
                <i className="bi bi-pencil"/>
            </EditIcon>

            <h1>Panel informations</h1>

            <PanelInformationsWrapper>
                <h2>Hourly fee</h2>
                <div><span>610$/hour (Negociated)</span></div>
            </PanelInformationsWrapper>

            <PanelInformationsWrapper>
                <h2>Terms & conditions</h2>
                <div><span>Monthly 10k$ retainer - see wih Jeanny smith</span></div>
                <PanelInformationsAttachment>
                    <i className="bi bi-paperclip"/>
                    <span>Attachment_lorem-ipsum25425.jpg</span>
                </PanelInformationsAttachment>
            </PanelInformationsWrapper>

            <PanelInformationsWrapper>
                <h2>Services & projects</h2>
                <div><span>Corporate M&A and internationl acquisitions</span></div>
            </PanelInformationsWrapper>

            <PanelInformationsWrapper>
                <h2>Internal correspondants</h2>
                <PanelInformationsCorrespondant>
                    <PanelInformationsCorrespondantUser>
                        <img src="https://via.placeholder.com/140x100" alt="avatar"/>
                        <span>Firstname Lastname</span>
                    </PanelInformationsCorrespondantUser>

                    <a href="test">
                        <i className="bi bi-chat-dots"/>
                        Message
                    </a>
                    <a href="profile">
                        <i className="bi bi-person"/>
                        Profile
                    </a>
                </PanelInformationsCorrespondant>

                <PanelInformationsCorrespondant>
                    <PanelInformationsCorrespondantUser>
                        <img src="https://via.placeholder.com/140x100" alt="avatar"/>
                        <span>Firstname Lastname</span>
                    </PanelInformationsCorrespondantUser>

                    <a href="test">
                        <i className="bi bi-chat-dots"/>
                        Message
                    </a>
                    <a href="profile">
                        <i className="bi bi-person"/>
                        Profile
                    </a>
                </PanelInformationsCorrespondant>
            </PanelInformationsWrapper>
        </PanelInformationsContainer>
    );
}

export default PanelInformations;
