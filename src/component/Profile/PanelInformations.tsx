import styled from "styled-components";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import {Colors} from "../../styledHelpers/Colors";
import React, {useState} from "react";
import {FontSize} from "../../styledHelpers/FontSizes";
import {CarouselFlex, EditIcon} from "../../styledHelpers/Components";
import {useFormik} from "formik";
import {EditInput} from "./Shared";
import * as yup from "yup";
import {ErrorWrapper} from "../../tools/YupFields";

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

const PanelInformationsAttachment = styled(FlexRow)`
  margin-top: 10px;
  padding: 8px 5px;

  align-items: center;
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

const PanelInformations = () => {
    const validation = yup.object({
        hourlyFee: yup.number().min(0),
        monthlyRetainer: yup.number().min(0),
        servicesAndProject: yup.string().matches(/^[a-zA-Z0-9&., ]+$/).required(),
    });

    const formik = useFormik({
        initialValues: {
            hourlyFee: 610,
            monthlyRetainer: 10,
            termsAndConditionAttachment: '',
            servicesAndProject: 'Corporate M&A and internationl acquisitions',
        },
        onSubmit: values => {
            setEditing(false);
        },
        validationSchema: validation,
    })

    const [editing, setEditing] = useState<boolean>(false);

    return (
        <PanelInformationsContainer>
            <EditIcon>
                {!editing &&
                    <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                }
                {editing &&
                    <i className="bi bi-check-lg" onClick={() => formik.handleSubmit()}/>
                }
            </EditIcon>

            <h1>Panel informations</h1>

            <PanelInformationsWrapper>
                <h2>Hourly fee</h2>
                {!editing &&
                    <div><span>{formik.values.hourlyFee}$/hour (Negociated)</span></div>
                }

                {editing &&
                    <EditInput type="number" placeholder="$ per hour" name="hourlyFee"
                               onChange={formik.handleChange} value={formik.values.hourlyFee}
                    />
                }
                {editing && formik.errors.hourlyFee &&
                <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                }
            </PanelInformationsWrapper>

            <PanelInformationsWrapper>
                <h2>Terms & conditions</h2>
                {!editing &&
                    <div><span>Monthly {formik.values.monthlyRetainer}k$ retainer - see with Jeanny Smith</span></div>
                }

                {editing &&
                    <EditInput type="number" placeholder="k per month" name="monthlyRetainer"
                               onChange={formik.handleChange} value={formik.values.monthlyRetainer}
                    />
                }
                {editing && formik.errors.monthlyRetainer &&
                <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                }
                <PanelInformationsAttachment>
                    <i className="bi bi-paperclip"/>

                    <EditInput type="file" placeholder="Attachment" name="termsAndConditionAttachment" disabled={!editing}
                               onChange={formik.handleChange} value={formik.values.termsAndConditionAttachment}
                    />
                </PanelInformationsAttachment>
            </PanelInformationsWrapper>

            <PanelInformationsWrapper>
                <h2>Services & projects</h2>
                {!editing &&
                    <div><span>{formik.values.servicesAndProject}</span></div>
                }

                {editing &&
                    <EditInput type="text" placeholder="services and project" name="servicesAndProject"
                               onChange={formik.handleChange} value={formik.values.servicesAndProject}
                    />
                }
                {editing && formik.errors.servicesAndProject &&
                <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                }
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
