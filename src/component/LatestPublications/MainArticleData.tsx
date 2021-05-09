import React, {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {FlexRow} from "../../styledHelpers/Grid";
import {User} from "../../entities/User";

interface MainArticleDataProps {
    title: string,
    date: string,
    user: User | null | undefined,
    articleImgUrl: string | null,
    customClassName: string,
}

const MainArticleDataWrapper = styled(FlexRow)`
  margin: 10px 0;
  align-items: center;
`;

const AvatarImage = styled.img`
  margin: 0 10px;
  border-radius: 50%;
  width: 20px;
  height: auto;
`;

const SmallText = styled.span`
  color: ${Colors.grey};
  font-size: ${FontSize["12"]};
`;

const ArticleMainImage = styled.div`
  margin-right: 10px;

  img {
    width: 70px;
    height: 70px;
  }
`;

const ArticleTitle = styled.h2`
  color: ${Colors.darkBlue};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 19px;
`;

const MainArticleData: FC<MainArticleDataProps> = props => {
    return (
        <MainArticleDataWrapper className={props.customClassName}>
            {props.articleImgUrl !== null &&
            <ArticleMainImage>
                <img src={props.articleImgUrl} alt={"article " + props.title + " main image"}/>
            </ArticleMainImage>
            }

            <div>
                <ArticleTitle>{props.title}</ArticleTitle>

                <div className="d-flex align-items-center mt-1">
                    <SmallText>{props.date}</SmallText>
                    <AvatarImage src={(props.user && props.user.avatarUrl) ? props.user.avatarUrl : ''} alt="avatar"/>
                    <SmallText>{props.user ? props.user.name : 'Lack'}</SmallText>
                </div>
            </div>
        </MainArticleDataWrapper>
    );
}

export default MainArticleData;
