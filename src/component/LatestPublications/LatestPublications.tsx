import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";

const ArticleContainer = styled.div`
  margin: 0;
  box-shadow: 0 7px 7px -2px ${Colors.grey};
`;

const MainArticleWrapper = styled.div`
  background-image: url("https://via.placeholder.com/300/0000FF/808080");
  min-height: 300px;
  position: relative;
`;

const MainArticleData = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
  
  h2 {
    color: ${Colors.white};
  }
  
  span {
    color: ${Colors.grey};
    font-size: ${FontSize["12"]};
  }
  
  img {
    margin: 0 10px;
    border-radius: 50%;
  }
  
  div {
    margin-top: 5px;
  }
`

const LatestArticleWrapper = styled.div`
  min-height: 300px;
  background-color: ${Colors.white};
`;

function LatestPublications() {
    return (
        <ArticleContainer className="row">
            <MainArticleWrapper className="col-12 col-xl-4">
                <MainArticleData>
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum,
                        feugiat tincidunt nunc vel, dictum tempus velit.
                    </h2>
                    <div className="d-flex align-items-center">
                        <span>7 jan. 2020</span>
                        <img src="https://via.placeholder.com/20/09f.png/fff" alt="avatar"/>
                        <span>John Doe</span>
                    </div>
                </MainArticleData>
            </MainArticleWrapper>
            <LatestArticleWrapper className="col-12 col-xl-8">

            </LatestArticleWrapper>
        </ArticleContainer>
    );
}

export default LatestPublications;