import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import MainArticleData from "./MainArticleData";
import {useEffect, useState} from "react";
import {IPost} from "../../entities/Post";
import {fetchLatestPosts, fetchMainPost} from "../../actions/PostAction";
import {IPhoto} from "../../entities/Photo";
import {fetchMainPhoto} from "../../actions/PhotoAction";
import {IUser} from "../../entities/User";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";

const ArticleContainer = styled.div`
  margin: 0;
  box-shadow: 0 7px 7px -2px ${Colors.grey};
`;

const MainArticleWrapper = styled.div.attrs((props: any) => ({
    backgroundImageUrl: props.backgroundImageUrl !== undefined ? props.backgroundImageUrl : '',
}))`
  background-image: url("${props => props.backgroundImageUrl}");
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
    const [posts, setPosts] = useState<IPost[]>([]);
    const [post, setPost] = useState<IPost | null>(null);
    const [photo, setPhoto] = useState<IPhoto | null>(null);

    useEffect(() => {
        fetchLatestPosts().then(posts => setPosts(posts));
        fetchMainPost().then(post => setPost(post));
        fetchMainPhoto().then(photo => setPhoto(photo));
    }, []);

    let users: IUser[] = useSelector(
        (state: IState) => state.users.users,
        shallowEqual
    );

    let photos: IPhoto[] = useSelector(
        (state: IState) => state.photos.photos,
        shallowEqual
    );

    return (
        <ArticleContainer className="row">
            {(post !== null && photo !== null && users.length > 0) &&
                <MainArticleWrapper className="col-12 col-xl-4" backgroundImageUrl={photo.url}>
                    <MainArticleData
                        title={post.title}
                        user={users.find((user: IUser) => user.id === post.userId)}
                        date="7 jan. 2020"
                        articleImgUrl={null}
                        customClassName="main-article-data"
                    />
                </MainArticleWrapper>
            }
            <LatestArticleWrapper className="col-12 col-xl-8">
                <h1>Latest publications</h1>

                {(photos.length > 0 && posts.length > 0 && users.length > 0) &&
                    posts.map((post, index) => {
                        return (
                            <MainArticleData
                                key={post.id}
                                title={post.title}
                                user={users.find((user: IUser) => user.id === post.userId)}
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