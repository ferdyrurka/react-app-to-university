import React from 'react';
import './App.css';
import LeftMenu from "./component/LeftMenu/LeftMenu";
import TopNav from "./component/TopNav/TopNav";
import styled from "styled-components";
import store from "./tools/store";
import {Provider} from 'react-redux';
import Test from "./component/NotFound/Test";
import {Route, BrowserRouter as Router, Switch,} from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
`;

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                <Route path="/test" exact component={Test} />

                <Route path="/">
                    <main>
                        <TopNav/>
                        <Container className="container-lg">
                            <div className="row row-cols-md-2 row-cols-1">
                                <LeftMenu/>
                                <div className="col">
                                    <Switch>
                                    </Switch>
                                </div>
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
