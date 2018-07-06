import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import ConverterPage from "../pages/ConverterPage/ConverterPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedComponent from './protectedComponent';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default class Main extends Component {
    render() {
        return(
            <main className='main-content'>
                <Switch>
                    <Route exact path="/" component={ArticlePage}/>
                    <Route path="/news" component={NewsPage}/>
                    <Route path="/converter" component={ConverterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <ProtectedComponent path="/profile" component={ProfilePage} />

                    <Route component={NotFoundPage} />
                </Switch>
            </main>
        );
    }
}

