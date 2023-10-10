import React from 'react';
import Home from './Home';
import { withAuthenticator } from "@aws-amplify/ui-react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TreeHierarchyPage from "./TreeHierarchyPage";

const App = ({ signOut }) => {
    return (
        <Router>
            <div className="App">
                <div className="Content">
                    <Routes>
                        <Route path="/tree" element={<TreeHierarchyPage />}></Route>
                        <Route path="/" element={<Home signOut={signOut}/>}></Route>

                    </Routes>
                </div>
            </div>
        </Router>

    );
};

export default withAuthenticator(App);
