import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";
import {FontSize} from "../../../styledHelpers/FontSizes";
import {CarouselFlex} from "../../../styledHelpers/Components";
import {FlexColumn} from "../../../styledHelpers/Grid";
import {Breakpoint} from "../../../styledHelpers/Breakpoint";

const StartWorkingOnCorporateContainer = styled.div`
  padding: 20px 0;
  margin-top: 20px;

  h1 {
    color: ${Colors.darkBlue};
    font-size: ${FontSize["22"]};
    font-weight: 700;
  }
`;

const StartWorkingOnCorporateWrapper = styled(CarouselFlex)`
  margin-top: 20px;
  justify-content: space-between;
`;

const StartWorkingOnCorporateItem = styled(FlexColumn)`
  padding: 15px 10px;
  background-color: ${Colors.white};
  border-radius: 5px;
  flex-basis: calc(33% - 10px);
  flex-grow: 0;
  flex-shrink: 0;
  height: 160px;
  margin-right: 10px;
  overflow-y: hidden;
  
  &:nth-last-child(1) {
    margin-right: 0;
  }

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    flex-basis: 250px;
  }
  
  img {
    height: 25px;
    max-width: 30px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: ${FontSize["18"]};
    color: ${Colors.darkBlue};
    margin-bottom: 15px;
    width: 100%;

    strong {
      font-weight: 900;
    }
  }
  
  p {
    font-size: ${FontSize["14"]};
    color: ${Colors.grey};
  }
`;

function StartWorkingOnCorporate() {
    return (
        <StartWorkingOnCorporateContainer>
            <h1>Start working on corporate maters</h1>

            <StartWorkingOnCorporateWrapper>
                <StartWorkingOnCorporateItem>
                    <img src="/media/icons/entities.png" alt="entities"/>
                    <h2>Explore your <strong>Entities</strong></h2>
                    <p>Donec porta hendrerit nulla pulvinar fermentum. Vivamus egestas elementum eros ut ultrices. </p>
                </StartWorkingOnCorporateItem>
                <StartWorkingOnCorporateItem>
                    <img src="/media/icons/ecosystem.png" alt="ownerhips"/>
                    <h2>Structure the <strong>Ownerships</strong></h2>
                    <p>Etiam imperdiet, nibh vitae gravida vestibulum, lectus arcu aliquam lorem, vitae tempus turpis felis vel erat.</p>
                </StartWorkingOnCorporateItem>
                <StartWorkingOnCorporateItem>
                    <img src="/media/icons/publications.png" alt="calendar"/>
                    <h2>Define the <strong>Calendar</strong></h2>
                    <p>Ut rutrum, purus sed ultrices viverra, urna quam pulvinar nulla, sit amet posuere nisi diam ac odio.</p>
                </StartWorkingOnCorporateItem>
            </StartWorkingOnCorporateWrapper>
        </StartWorkingOnCorporateContainer>
    );
}

export default StartWorkingOnCorporate;
