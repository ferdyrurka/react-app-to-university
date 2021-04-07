import React from 'react';
import './App.css';
import LeftMenu from "./component/LeftMenu/LeftMenu";
import TopNav from "./component/TopNav/TopNav";
import styled from "styled-components";

function App() {
    const Container = styled.div`
      max-width: 1260px;
      margin: 0 auto;
    `;

    return (
        <main>
            <TopNav/>
            <Container>
                <LeftMenu/>
            </Container>
        </main>
    );
}

export default App;
