import React from 'react';
import './App.css';
import LeftMenu from "./component/LeftMenu/LeftMenu";
import TopNav from "./component/TopNav/TopNav";
import styled from "styled-components";

function App() {
    const Container = styled.div`
      margin: 0 auto;
    `;

    return (
        <main>
            <TopNav/>
            <Container className="container-lg">
                <div className="row row-cols-md-2 row-cols-1">
                    <LeftMenu/>
                    <div className="col">
                        Lorem ipsum
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default App;
