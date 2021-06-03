import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel, EditIcon} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";
import React from "react";

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
    return (
        <AmountOfFeesContainer>
            <EditIcon>
                <i className="bi bi-pencil"/>
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
                    <tr>
                        <th scope="row">2019</th>
                        <td>CS 153</td>
                        <td>3500$</td>
                        <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <th scope="row">2018</th>
                        <td>CS 47</td>
                        <td>9500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row">2017</th>
                        <td>CS 32</td>
                        <td>10 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row"/>
                        <td>CS 153</td>
                        <td>18 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    <tr>
                        <th scope="row"/>
                        <td>CS 153</td>
                        <td>15 500$</td>
                        <td>Linklasters</td>
                    </tr>
                    </tbody>
                </AmountOfFeesTable>
            </AmountOfFeesTableWrapper>
        </AmountOfFeesContainer>
    );
}

export default AmountOfFees;