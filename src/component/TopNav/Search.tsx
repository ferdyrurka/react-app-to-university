import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  margin-left: 60px;
  max-width: 540px;
  min-width: 320px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: calc(100% - 20px);
  height: 30px;
  background-image: url(media/icons/search.png);
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


function Search() {
    return (
        <SearchWrapper>
            <SearchInput placeholder="Search Legalcluster"></SearchInput>
        </SearchWrapper>
    );
}

export default Search;