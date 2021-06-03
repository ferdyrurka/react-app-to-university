import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel, EditIcon} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";
import React, {useState} from "react";
import {findAllProposals} from "../../actions/ProposalAction";
import {useFormik} from "formik";
import {EditInput} from "./Shared";

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

    const formik = useFormik({
        initialValues: {
            proposals: findAllProposals(),
        },
        onSubmit: values => {
            setEditing(false);
        }
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
                                              name={'proposals[' + index + ']["location"]'}
                                              onChange={formik.handleChange} value={value.location}
                                   />
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
                               </td>
                               <td>
                                   {!editing && value.date}
                                   {editing &&
                                       <EditInput type="text" placeholder="name"
                                                  name={'proposals[' + index + ']["date"]'}
                                                  onChange={formik.handleChange} value={value.date}
                                       />
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