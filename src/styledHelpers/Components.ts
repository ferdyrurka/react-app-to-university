import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  outline: none;

  &:hover, &:focus, &:visited, &:active {
    text-decoration: none;
    outline: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  background-image: url(/media/icons/search.png);
  background-repeat: no-repeat;
  background-position: calc(100% - 7px) 50%;

  ::-webkit-input-placeholder {
    text-align: center;
  }

  ::-moz-placeholder {
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }
`;

export const Carousel = styled.div`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselFlex = styled(Carousel)`
  display: flex;
  flex-wrap: nowrap;
`;

export const EditIcon = styled.div`
  position: relative;

  img, i {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: auto;
    
    &:hover {
      cursor: pointer;
    }
  }
`;
