import React from 'react';
import './App.css';
import LeftMenu from "./component/LeftMenu/LeftMenu";
import TopNav from "./component/TopNav/TopNav";
import styled from "styled-components";
import store from "./tools/store";
import {Provider} from 'react-redux';
import Test from "./component/NotFound/Test";
import {Route, BrowserRouter as Router, Switch,} from 'react-router-dom';
import { Breakpoint } from './styledHelpers/Breakpoint';
import HomePage from "./component/HomePage/HomePage";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  
  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    flex-wrap: nowrap;
  }

  .content {
    width: 100%;
    
    @media only screen and (min-width: ${Breakpoint["tablet"]}) {
      margin-left: 15px;
    }
  }
`;

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/test" exact component={Test}/>

                    <Route path="/">
                        <main>
                            <TopNav/>
                            <Container className="container-lg">
                                <LeftMenu/>
                                <div className="content">
                                    <Switch>
                                        <Route path="/" exact>
                                            <HomePage/>
                                        </Route>
                                    </Switch>
                                </div>
                            </Container>
                        </main>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
