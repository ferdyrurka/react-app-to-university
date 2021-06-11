import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel, EditIcon} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";
import React, {useState} from "react";
import {useFormik} from "formik";
import {findAllAmountOfFees} from "../../actions/AmountOfFeeAction";
import {EditInput} from "./Shared";
import * as yup from 'yup';
import {isValidateField, ErrorWrapper} from "../../tools/YupFields";
import moment from "moment";

const AmountOfFeesContainer = styled(FlexColumn)`
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

const AmountOfFeesTableWrapper = styled(Carousel)`
  margin-top: 20px;
`;

const AmountOfFeesTable = styled.table`
  thead {
    tr {
      th {
        font-weight: bold;
        font-size: ${FontSize["18"]};
        white-space: nowrap;
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

function AmountOfFees() {
    const [editing, setEditing] = useState<boolean>(false);

    const validation = yup.object({
        amountOfFees: yup.array().of(
            yup.object({
                year: yup.number().min(1945).max(moment().year()),
                costCenter: yup.string().matches(/^[a-zA-Z0-9 ]+$/).required(),
                totalAmount: yup.number().min(0),
                lawFirm: yup.string().matches(/^[a-zA-Z0-9 ]+$/).required(),
            })
        )
    });

    const formik = useFormik({
        initialValues: {
            amountOfFees: findAllAmountOfFees(),
        },
        onSubmit: values => {
            setEditing(false);
        },
        validationSchema: validation,
    });

    return (
        <AmountOfFeesContainer>
            <EditIcon>
                {!editing &&
                    <i className="bi bi-pencil" onClick={() => setEditing(true)}/>
                }
                {editing &&
                    <i className="bi bi-check-lg" onClick={() => {
                        formik.handleSubmit()
                    }}/>
                }
            </EditIcon>

            <h1>Amount of fees</h1>

            <AmountOfFeesTableWrapper>
                <AmountOfFeesTable className="table">
                    <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Cost center</th>
                        <th scope="col">Total amount</th>
                        <th scope="col">Law firm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {formik.values.amountOfFees.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">
                                    {(!editing && value.year > 1945) && value.year}
                                    {editing &&
                                        <EditInput type="text" placeholder="year"
                                                   name={'amountOfFees[' + index + ']["year"]'}
                                                   onChange={formik.handleChange} value={value.year}
                                        />
                                    }

                                    {editing && formik.errors.amountOfFees &&
                                        isValidateField(formik.errors.amountOfFees, index, 'year')
                                    &&
                                        <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </th>
                                <td>
                                    {!editing && value.costCenter}
                                    {editing &&
                                        <EditInput type="text" placeholder="cost center"
                                                   name={'amountOfFees[' + index + ']["costCenter"]'}
                                                   onChange={formik.handleChange} value={value.costCenter}
                                        />
                                    }

                                    {editing && formik.errors.amountOfFees &&
                                        isValidateField(formik.errors.amountOfFees, index, 'costCenter')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.totalAmount + '$'}
                                    {editing &&
                                        <EditInput type="number" placeholder="total amount"
                                                   name={'amountOfFees[' + index + ']["totalAmount"]'}
                                                   onChange={formik.handleChange} value={value.totalAmount}
                                        />
                                    }

                                    {editing && formik.errors.amountOfFees &&
                                        isValidateField(formik.errors.amountOfFees, index, 'totalAmount')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                                <td>
                                    {!editing && value.lawFirm}
                                    {editing &&
                                        <EditInput type="text" placeholder="law firm"
                                                   name={'amountOfFees[' + index + ']["lawFirm"]'}
                                                   onChange={formik.handleChange} value={value.lawFirm}
                                        />
                                    }

                                    {editing && formik.errors.amountOfFees &&
                                        isValidateField(formik.errors.amountOfFees, index, 'lawFirm')
                                    &&
                                    <ErrorWrapper><small>Give bad data</small></ErrorWrapper>
                                    }
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </AmountOfFeesTable>
            </AmountOfFeesTableWrapper>
        </AmountOfFeesContainer>
    );
}

export default AmountOfFees;