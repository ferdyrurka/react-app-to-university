import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel, EditIcon} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";
import React, {useState} from "react";
import {useFormik} from "formik";
import {findAllInternalReviews} from "../../actions/InternalReviewAction";
import {EditInput} from "./Shared";

const InternalReviewsContainer = styled(FlexColumn)`
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

const InternalReviewsTableWrapper = styled(Carousel)`
  margin-top: 20px;
`;

const InternalReviewsTable = styled.table`
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

function InternalReviews() {
    const [editing, setEditing] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            internalReviews: findAllInternalReviews(),
        },
        onSubmit: values => {
            setEditing(false);
        }
    });

    return (
        <InternalReviewsContainer>
            <EditIcon>
                {!editing &&
                    <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                }
                {editing &&
                    <i className="bi bi-check-lg" onClick={() => formik.handleSubmit()}/>
                }
            </EditIcon>

            <h1>Internal reviews</h1>

            <InternalReviewsTableWrapper>
                <InternalReviewsTable className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Entity</th>
                        <th scope="col">Location</th>
                        <th scope="col">Expertise</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {formik.values.internalReviews.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">
                                    {!editing && value.name}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'internalReviews[' + index + ']["name"]'}
                                               onChange={formik.handleChange} value={value.name}
                                    />
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
                                </td>
                                <td>
                                    {!editing && value.location}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'internalReviews[' + index + ']["location"]'}
                                               onChange={formik.handleChange} value={value.location}
                                    />
                                    }
                                </td>
                                <td>
                                    {!editing && value.expertise}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'internalReviews[' + index + ']["expertise"]'}
                                               onChange={formik.handleChange} value={value.expertise}
                                    />
                                    }
                                </td>
                                <td>
                                    {!editing && value.date}
                                    {editing &&
                                    <EditInput type="text" placeholder="name"
                                               name={'internalReviews[' + index + ']["date"]'}
                                               onChange={formik.handleChange} value={value.date}
                                    />
                                    }
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </InternalReviewsTable>
            </InternalReviewsTableWrapper>

            <a href="test">See more reviews</a>
        </InternalReviewsContainer>
    );
}

export default InternalReviews;