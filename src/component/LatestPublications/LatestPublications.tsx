import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import MainArticleData from "./MainArticleData";
import {useEffect, useState} from "react";
import {Post} from "../../entities/post";
import {fetchLatestPosts} from "../../actions/PostAction";
import {Photo} from "../../entities/photo";
import {fetchLatestPhotos} from "../../actions/PhotoAction";
import {User} from "../../entities/user";
import {fetchUsers} from "../../actions/UserAction";

const ArticleContainer = styled.div`
  margin: 0;
  box-shadow: 0 7px 7px -2px ${Colors.grey};
`;

const MainArticleWrapper = styled.div`
  background-image: url("https://via.placeholder.com/300/0000FF/808080");
  min-height: 300px;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

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
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  h1 {
    color: ${Colors.darkBlue};
    font-size: ${FontSize["22"]};
    font-weight: 700;
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
    const [posts, setPosts] = useState<Post[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchLatestPosts().then(posts => setPosts(posts));
        fetchUsers().then(users => setUsers(users));
        fetchLatestPhotos().then(photos => setPhotos(photos));
    }, [users]);

    return (
        <ArticleContainer className="row">
            <MainArticleWrapper className="col-12 col-xl-4">
                <MainArticleData
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum ipsum, feugiat tincidunt nunc vel, dictum tempus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    avatarUrl="https://via.placeholder.com/20/09f.png/fff"
                    articleMaintainerFullName="John Doe"
                    date="7 jan. 2020"
                    articleImgUrl={null}
                    customClassName="main-article-data"
                />
            </MainArticleWrapper>
            <LatestArticleWrapper className="col-12 col-xl-8">
                <h1>Latest publications</h1>

                {(photos.length > 0 && posts.length > 0 && users.length > 0) &&
                    posts.map((post, index) => {
                        return (
                            <MainArticleData
                                key={post.id}
                                title={post.title}
                                avatarUrl={photos[index].thumbnailUrl}
                                articleMaintainerFullName={users.find((user: User) => user.id === post.userId)?.name}
                                date="7 jan. 2020"
                                articleImgUrl={photos[index].url}
                                customClassName=""
                            />
                        );
                    }
                )}

                <div className="see-more-publications-wrapper">
                    <a href="/test">See more publications</a>
                </div>
            </LatestArticleWrapper>
        </ArticleContainer>
    );
}

export default LatestPublications;