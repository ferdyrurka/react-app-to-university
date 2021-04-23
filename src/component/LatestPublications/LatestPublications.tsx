import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import MainArticleData from "./MainArticleData";

const ArticleContainer = styled.div`
  margin: 0;
  box-shadow: 0 7px 7px -2px ${Colors.grey};
`;

const MainArticleWrapper = styled.div`
  background-image: url("https://via.placeholder.com/300/0000FF/808080");
  min-height: 300px;
  position: relative;
  
  .main-article-data {
    position: absolute;
    bottom: 20px;
    left: 10px;
    
    h2 {
      color: ${Colors.white};
    }
  }
`;

const LatestArticleWrapper = styled.div`
  min-height: 300px;
  background-color: ${Colors.white};
  padding: 20px 10px;
  
  h1 {
    color: ${Colors.darkBlue};
    font-size: ${FontSize["22"]};
  }
  
  .see-more-publications-wrapper {
    margin-top: 20px;
    
    a {
      color: ${Colors.blue};
      text-decoration: none;
    }
  }
`;

function LatestPublications() {
    return (
        <ArticleContainer className="row">
            <MainArticleWrapper className="col-12 col-xl-4">
                <MainArticleData
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum, feugiat tincidunt nunc vel, dictum tempus velit."
                    avatarUrl="https://via.placeholder.com/20/09f.png/fff"
                    articleMaintainerFullName="John Doe"
                    date="7 jan. 2020"
                    maxLines={3}
                    articleImgUrl={null}
                    customClassName="main-article-data"
                />
            </MainArticleWrapper>
            <LatestArticleWrapper className="col-12 col-xl-8">
                <h1>Latest publications</h1>

                <MainArticleData
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum, feugiat tincidunt nunc vel, dictum tempus velit."
                    avatarUrl="https://via.placeholder.com/20/09f.png/fff"
                    articleMaintainerFullName="John Doe"
                    date="7 jan. 2020"
                    maxLines={2}
                    articleImgUrl="https://via.placeholder.com/70/0000FF/808080"
                    customClassName=""
                />

                <MainArticleData
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum, feugiat tincidunt nunc vel, dictum tempus velit."
                    avatarUrl="https://via.placeholder.com/20/09f.png/fff"
                    articleMaintainerFullName="John Doe"
                    date="7 jan. 2020"
                    maxLines={2}
                    articleImgUrl="https://via.placeholder.com/70/0000FF/808080"
                    customClassName=""
                />

                <MainArticleData
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum, feugiat tincidunt nunc vel, dictum tempus velit."
                    avatarUrl="https://via.placeholder.com/20/09f.png/fff"
                    articleMaintainerFullName="John Doe"
                    date="7 jan. 2020"
                    maxLines={2}
                    articleImgUrl="https://via.placeholder.com/70/0000FF/808080"
                    customClassName=""
                />

                <div className="see-more-publications-wrapper">
                    <a href="/test">See more publications</a>
                </div>
            </LatestArticleWrapper>
        </ArticleContainer>
    );
}

export default LatestPublications;