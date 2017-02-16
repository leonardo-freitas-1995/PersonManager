import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/Routes/AppRoutes';
import AppNavbar from './components/Navbar/AppNavbar';

const mainCss = require("style-loader!css-loader!./main.css");

class App extends React.Component{
    render(){
        return (
            <div>
                <AppNavbar/>
                <div className="main-content">
                    <AppRoutes/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-app'));