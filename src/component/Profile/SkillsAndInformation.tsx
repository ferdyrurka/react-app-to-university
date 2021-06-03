import styled from "styled-components";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import {Colors} from "../../styledHelpers/Colors";
import {EditIcon} from "../../styledHelpers/Components";
import React, {useState} from "react";
import {useFormik} from "formik";
import {EditInput} from "./Shared";

const SkillsAndInformationContainer = styled(FlexColumn)`
  padding-top: 15px;
  padding-bottom: 5px;
  position: relative;
  
  border-top: ${Colors.lightGrey} 1px solid;
`;

const SkillsAndInformationWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  
  h2 {
    width: 100%;
    margin-bottom: 5px;
    color: ${Colors.grey};
  }
`;

const SkillsAndInformationItem = styled(FlexRow)`
  flex-wrap: wrap;

  div {
    padding: 3px 6px;
    background-color: #E6F0F3;
    border-radius: 3px;
    color: #6BA9B8;
    margin-top: 5px;
    
    margin-right: 10px;
  }
`;

const SkillsAndInformation = () => {
    const formik = useFormik({
        initialValues: {
            expertise: 'Mergers and acquisition',
            specialities: 'Cross border operation;Transaction over 500m&/$',
            admissionToPracticeLaw: 'Paris bar association;Tunisian bar association',
            countries: 'Tunisia',
        },
        onSubmit: values => {
            setEditing(false);
        }
    });

    const [editing, setEditing] = useState<boolean>(false);

    const showSkillsAndInformationItem = (value: string, index: number) => {
        if (value.length === 0)
            return '';

        return (
            <div key={index}><span>{value}</span></div>
        );
    }

    return (
        <SkillsAndInformationContainer>
            <EditIcon>
                {!editing &&
                    <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                }
                {editing &&
                    <i className="bi bi-check-lg" onClick={() => formik.handleSubmit()}/>
                }
            </EditIcon>

            <SkillsAndInformationWrapper>
                <h2>Expertise</h2>

                {!editing &&
                    <SkillsAndInformationItem>
                        {formik.values.expertise.split(';').map((value, index) =>
                            showSkillsAndInformationItem(value, index))}
                    </SkillsAndInformationItem>
                }

                {editing &&
                    <SkillsAndInformationItem>
                        <EditInput type="text" placeholder="Separator is ';'" name="expertise"
                               onChange={formik.handleChange} value={formik.values.expertise}
                        />
                    </SkillsAndInformationItem>
                }
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Specialities</h2>

                {!editing &&
                    <SkillsAndInformationItem>
                        {formik.values.specialities.split(';').map((value, index) =>
                            showSkillsAndInformationItem(value, index))}
                    </SkillsAndInformationItem>
                }

                {editing &&
                    <SkillsAndInformationItem>
                        <EditInput type="text" placeholder="Separator is ';'" name="specialities"
                               onChange={formik.handleChange} value={formik.values.specialities}
                        />
                    </SkillsAndInformationItem>
                }
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Admission to practice law</h2>

                {!editing &&
                    <SkillsAndInformationItem>
                        {formik.values.admissionToPracticeLaw.split(';').map((value, index) =>
                            showSkillsAndInformationItem(value, index))}
                    </SkillsAndInformationItem>
                }

                {editing &&
                    <SkillsAndInformationItem>
                        <EditInput type="text" placeholder="Separator is ';'" name="admissionToPracticeLaw"
                               onChange={formik.handleChange} value={formik.values.admissionToPracticeLaw}
                        />
                    </SkillsAndInformationItem>
                }
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Countries</h2>

                {!editing &&
                    <SkillsAndInformationItem>
                        {formik.values.countries.split(';').map((value, index) =>
                            showSkillsAndInformationItem(value, index))}
                    </SkillsAndInformationItem>
                }

                {editing &&
                    <SkillsAndInformationItem>
                        <EditInput type="text" placeholder="Separator is ';'" name="countries"
                               onChange={formik.handleChange} value={formik.values.countries}
                        />
                    </SkillsAndInformationItem>
                }
            </SkillsAndInformationWrapper>
        </SkillsAndInformationContainer>
    );
}

export default SkillsAndInformation;
