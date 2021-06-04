import React, {useState} from "react";
import {IUser} from "../../entities/User";
import styled from "styled-components";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";
import {FlexColumn} from "../../styledHelpers/Grid";
import {CarouselFlex, EditIcon} from "../../styledHelpers/Components";
import {LineHeight} from "../../styledHelpers/LineHeight";
import {useFormik} from "formik";
import * as yup from "yup";
import {EditInput} from "./Shared";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {ErrorWrapper} from "../../tools/YupFields";

const BasicDataContainer = styled(CarouselFlex)`
  max-height: 250px;
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

const BasicDataErrorWrapper = styled(ErrorWrapper)`
  margin-bottom: 5px;
`;

const BasicData = () => {
    let user: IUser | null = useSelector(
        (state: IState) => state.currentUser.user,
        shallowEqual
    );

    const [editing, setEditing] = useState<boolean>(false);

    const validation = yup.object({
        name: yup.string().matches(/^[a-zA-Z0-9 /-]+$/).required(),
        companyName: yup.string().matches(/^[a-zA-Z0-9 /-]+$/).required(),
        city: yup.string().matches(/^[a-zA-Z0-9 /-]+$/).required(),
        catchPhrase: yup.string().matches(/^[a-zA-Z0-9 /-]+$/).required(),
        email: yup.string().email().required(),
        // eslint-disable-next-line
        phone: yup.string().required(),
    });

    const formik = useFormik({
        initialValues: {
            name: user?.name,
            companyName: user?.company?.name,
            city: user?.address?.city,
            catchPhrase: user?.company?.catchPhrase,
            email: user?.email,
            phone: user?.phone,
        },
        enableReinitialize: true,
        onSubmit: values => {
            setEditing(false);
        },
        validationSchema: validation,
    });

    return (
        <BasicDataContainer>
            {user !== null &&
            <BasicDataSeeProfileWrapper>
                <img src={user.avatarUrl !== null ? user.avatarUrl : ''} alt="avatar logo"/>
                <a href="/profile">See profile</a>
            </BasicDataSeeProfileWrapper>
            }

            {user !== null &&
            <BasicDataPersonalDetailsWrapper>
                {!editing && <BasicDataSpan className="bold">{formik.values.name}</BasicDataSpan>}
                {editing &&
                <EditInput type="text" placeholder="name" name="name"
                           onChange={formik.handleChange} value={formik.values.name}
                />
                }
                {editing && formik.errors.name &&
                <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                }

                {!editing && <BasicDataSpan className="bold">{formik.values.companyName}</BasicDataSpan>}
                {editing &&
                <EditInput type="text" placeholder="company name" name="companyName"
                           onChange={formik.handleChange} value={formik.values.companyName}
                />
                }
                {editing && formik.errors.companyName &&
                <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                }


                {!editing && <BasicDataSpan>{formik.values.city}</BasicDataSpan>}
                {editing &&
                <EditInput type="text" placeholder="city" name="city"
                           onChange={formik.handleChange} value={formik.values.city}
                />
                }
                {editing && formik.errors.city &&
                <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                }


                {!editing && <BasicDataSpan>{formik.values.catchPhrase}</BasicDataSpan>}
                {editing &&
                <EditInput type="text" placeholder="catch phrase" name="catchPhrase"
                           onChange={formik.handleChange} value={formik.values.catchPhrase}
                />
                }
                {editing && formik.errors.catchPhrase &&
                <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                }
            </BasicDataPersonalDetailsWrapper>
            }

            {user !== null &&
            <BasicDataEditContactDataWrapper>
                <BasicDataEditIcon>
                    {!editing &&
                    <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                    }
                    {editing &&
                    <i className="bi bi-check-lg" onClick={() => formik.handleSubmit()}/>
                    }
                </BasicDataEditIcon>

                <BasicDataContactData>
                    {!editing && <BasicDataSpan>{formik.values.email}</BasicDataSpan>}
                    {editing &&
                    <EditInput type="email" placeholder="email" name="email"
                               onChange={formik.handleChange} value={formik.values.email}
                    />
                    }
                    {editing && formik.errors.email &&
                    <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                    }

                    {!editing && <BasicDataSpan>{formik.values.phone}</BasicDataSpan>}
                    {editing &&
                    <EditInput type="text" placeholder="phone" name="phone"
                               onChange={formik.handleChange} value={formik.values.phone}
                    />
                    }
                    {editing && formik.errors.phone &&
                    <BasicDataErrorWrapper><small>Give bad data</small></BasicDataErrorWrapper>
                    }
                </BasicDataContactData>
            </BasicDataEditContactDataWrapper>
            }
        </BasicDataContainer>
    );
}

export default BasicData;