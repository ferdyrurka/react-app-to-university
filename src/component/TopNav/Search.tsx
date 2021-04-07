import React from "react";
import styled from "styled-components";

function Search() {
    const SearchWrapper = styled.div`
      margin-left: 60px;
      max-width: 540px;
      min-width: 320px;
      width: calc(100% - 20px);
    `;

    const SearchInput = styled.input`
      width: 100%;
      height: 30px;
      border-style: solid;
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

    return (
        <SearchWrapper>
            <SearchInput placeholder="Search Legalcluster"></SearchInput>
        </SearchWrapper>
    );
}

export default Search;