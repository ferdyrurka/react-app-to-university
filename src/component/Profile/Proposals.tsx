import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel, EditIcon} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";
import React, {useState} from "react";
import {findAllProposals} from "../../actions/ProposalAction";
import {useFormik} from "formik";
import {EditInput} from "./Shared";
import * as yup from "yup";
import {ErrorWrapper, isValidateField} from "../../tools/YupFields";

const ProposalsContainer = styled(FlexColumn)`
  border-top: ${Colors.lightGrey} 1px solid;
  padding-top: 15px;
  padding-bottom: 15px;

  h1 {
    font-size: ${FontSize["18"]};
  }

  a {
    text-decoration: none;
  }
`;

const ProposalsTableWrapper = styled(Carousel)`
  margin-top: 20px;
`;

const ProposalsTable = styled.table`
  thead {
    border-bottom: ${Colors.lightGrey} solid 1px;

    tr {
      th {
        font-weight: bold;
        font-size: ${FontSize["18"]};
      }
    }
  }

  tbody {
    tr {
      th, td {
        font-size: ${FontSize["14"]};
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 160px;
      }
    }
  }
`;

function Proposals() {
    const [editing, setEditing] = useState<boolean>(false);

    const validation = yup.object({
        proposals: yup.array().of(
            yup.object({
                name: yup.string().matches(/^[a-zA-Z0-9&. ]+$/).required(),
                entity: yup.string().matches(/^[a-zA-Z0-9 ]+$/).required(),
                location: yup.string().matches(/^[a-zA-Z -]+$/).required(),
                expertise: yup.string().matches(/^#?[a-zA-Z0-9&. ]+$/).required(),
                date: yup.string().matches(/^([0-9]{1,2})\/([0-9]){1,2}\/([0-9]){1,4}$/).required(),
                firm: yup.string().matches(/^[a-zA-Z0-9 ]+$/).required(),
            })
        )
    });

    const formik = useFormik({
        initialValues: {
            proposals: findAllProposals(),
        },
        onSubmit: values => {
            setEditing(false);
        },
        validationSchema: validation,
    });

    return (
        <ProposalsContainer>
            <EditIcon>
                {!editing &&
                <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                }
                {editing &&
                <i className="bi bi-check-lg" onClick={() => formik.handleSubmit()}/>
                }
            </EditIcon>

            <h1>Proposals</h1>

            <ProposalsTableWrapper>
                <ProposalsTable className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Entity</th>
                        <th scope="col">Location</th>
                        <th scope="col">Expertise</th>
                        <th scope="col">Date</th>
                        <th scope="col">Firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {formik.values.proposals.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">
                                    {!editing && value.name}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["name"]'}
                                               onChange={formik.handleChange} value={value.name}
                                    />
                                    }
                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'name')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </th>
                                <td>
                                    {!editing && value.entity}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["entity"]'}
                                               onChange={formik.handleChange} value={value.entity}
                                    />
                                    }
                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'entity')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.location}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["location"]'}
                                               onChange={formik.handleChange} value={value.location}
                                    />
                                    }

                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'location')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.expertise}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["expertise"]'}
                                               onChange={formik.handleChange} value={value.expertise}
                                    />
                                    }

                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'expertise')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.date}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["date"]'}
                                               onChange={formik.handleChange} value={value.date}
                                    />
                                    }

                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'date')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.firm}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'proposals[' + index + ']["firm"]'}
                                               onChange={formik.handleChange} value={value.firm}
                                    />
                                    }

                                    {editing && formik.errors.proposals &&
                                    isValidateField(formik.errors.proposals, index, 'firm')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </ProposalsTable>
            </ProposalsTableWrapper>

            <a href="test">See more proposals</a>
        </ProposalsContainer>
    );
}

export default Proposals;