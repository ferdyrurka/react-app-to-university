import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Carousel} from "../../styledHelpers/Components";
import {FlexColumn} from "../../styledHelpers/Grid";

const ProposalsContainer = styled(FlexColumn)`
  border-top: ${Colors.lightGrey} 1px solid;
  padding-top: 15px;
  padding-bottom: 5px;
  
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
    return (
        <ProposalsContainer>
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
                    <tr>
                        <th scope="row">Operation times</th>
                        <td>Renault corsa</td>
                        <td>France</td>
                        <td>#Tax</td>
                        <td>20/01/2020</td>
                        <td>XYZ</td>
                    </tr>
                    <tr>
                        <th scope="row">Op. Prometheus</th>
                        <td>Renault HQ</td>
                        <td>Usa</td>
                        <td>#M&A</td>
                        <td>20/01/2019</td>
                        <td>SVZ</td>
                    </tr>
                    <tr>
                        <th scope="row">Op. Latandre</th>
                        <td>Renault brossa</td>
                        <td>Italia</td>
                        <td>Social</td>
                        <td>20/01/2018</td>
                        <td>Racine</td>
                    </tr>
                    </tbody>
                </ProposalsTable>
            </ProposalsTableWrapper>

            <a href="test">See more proposals</a>
        </ProposalsContainer>
    );
}

export default Proposals;