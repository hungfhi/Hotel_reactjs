import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import styled from "styled-components";

//component
import SignIn from '../SignIn';
import TopMenu from './TopMenu';
import LogIn from '../LogIn';
import Home from "../Home";
import Footer from "./Footer";
import Main from "../Main";
const AppRouter = ({ className }) => {
    return (
        <Router styled={{ witdh: "100%" }}>
            <TopMenu />
            <div className={className}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/listing" element={<Main />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}
export default styled(AppRouter)`
`