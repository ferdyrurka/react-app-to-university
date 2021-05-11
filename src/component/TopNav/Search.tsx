import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../styledHelpers/Breakpoint";
import { SearchInput } from "../../styledHelpers/Components";

const SearchWrapper = styled.div`
  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    margin-left: 60px;
  }
  
  max-width: 540px;
  min-width: 140px;
  width: 100%;
  order: 2;
`;

function Search() {
    return (
        <SearchWrapper>
            <SearchInput placeholder="Search Legalcluster"></SearchInput>
        </SearchWrapper>
    );
}

export default Search;