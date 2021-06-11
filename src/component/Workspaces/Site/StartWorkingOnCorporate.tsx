import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";
import {FontSize} from "../../../styledHelpers/FontSizes";
import {Carousel} from "../../../styledHelpers/Components";
import {FlexColumn} from "../../../styledHelpers/Grid";

const StartWorkingOnCorporateContainer = styled.div`
  padding: 20px 15px;
  margin-top: 20px;

  h1 {
    color: ${Colors.darkBlue};
    font-size: ${FontSize["22"]};
    font-weight: 700;
  }
`;

const StartWorkingOnCorporateWrapper = styled(Carousel)`
  margin-top: 20px;
`;

const StartWorkingOnCorporateItem = styled(FlexColumn)`
  padding: 15px 10px;
  background-color: ${Colors.white};
  border-radius: 5px;
  width: 250px;
  height: 160px;
  margin-right: 10px;
  
  h2 {
    font-size: ${FontSize["20"]};
    color: ${Colors.darkBlue};
    
    strong {
      font-weight: 900;
    }
  }
`;

function StartWorkingOnCorporate() {
    return (
        <StartWorkingOnCorporateContainer>
            <h1>Start working on corporate maters</h1>

            <StartWorkingOnCorporateWrapper>
                <StartWorkingOnCorporateItem>
                    <h2>Explore your <strong>Entities</strong></h2>
                </StartWorkingOnCorporateItem>
            </StartWorkingOnCorporateWrapper>
        </StartWorkingOnCorporateContainer>
    );
}

export default StartWorkingOnCorporate;
