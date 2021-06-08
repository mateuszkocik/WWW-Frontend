import React, {Component} from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import About from './About';
import Team from './Team';
import Prices from './Prices';
import Gallery from "./Gallery";
import Contact from "./Contact";

class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul className="header">
                            <li><NavLink exact to="/">About</NavLink></li>
                            <li><NavLink to="/stuff">Team</NavLink></li>
                            <li><NavLink to="/prices">Prices</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={About}/>
                            <Route path="/stuff" component={Team}/>
                            <Route path="/prices" component={Prices}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }

}

export default App;
