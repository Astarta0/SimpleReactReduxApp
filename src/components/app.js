import React, {Component} from "react";
import Main from './main';
import Header from './header';

export default class App extends Component {
    render() {
        return(
            <div className='app-content'>
                <Header />
                <Main location={document.location.pathname}/>
            </div>
        );
    }
}