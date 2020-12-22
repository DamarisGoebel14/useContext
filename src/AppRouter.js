import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {Home} from './Home'
import {About} from './About'

import {UserContext} from "./UserContext";


function AppRouter () {
    const [value, setValue] = useState('hello from context');

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home </Link>
                        </li>
                        <li>
                            <Link to="/about">About </Link>
                        </li>
                    </ul>
                    </nav>
                <UserContext.Provider value={{value, setValue}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/about"  component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    )
}
export default AppRouter;