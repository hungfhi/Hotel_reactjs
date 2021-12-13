import PropTypes from "prop-types";
import React, { memo, useState, useEffect } from "react";
import { Layout, Carousel, Image, Affix, Button } from 'antd';
import styled from "styled-components";
import 'antd/dist/antd.css';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { GitlabOutlined } from '@ant-design/icons';
const TopMenu = memo(
    ({ className }) => {
        const [backgroundColorH, setbackgroundColorH] = useState('')
        const [colorH, setColorH] = useState('rgb(0, 132, 137)')
        const listenScrollEvent = (e) => {
            if (window.scrollY < 1) {
                setbackgroundColorH('')
                setColorH('#000');
            }
            else {
                setbackgroundColorH('#fff')
                setColorH('rgb(0, 132, 137)');
            }
        }
        useEffect(() => {
            listenScrollEvent()
        }, [listenScrollEvent]);

        return (

            <div className={className}>
                <Affix onChange={listenScrollEvent}>
                    <header style={{ backgroundColor: backgroundColorH, color: colorH }}>
                        <Link className="brand" to="/" style={{ color: colorH }}><GitlabOutlined /> Travel</Link>
                        <div className="navigation">
                            <div className="navigation-items" >
                                <Link to="/" style={{ color: colorH }}>Hotels</Link>
                                <Link to="/listing" style={{ color: colorH }}>Listing</Link>
                                <Link to="/log_in" style={{ color: colorH }}>Agent</Link>
                                <Link to="/sign_in" style={{ color: colorH }}>Pricing</Link>
                                <Button type="primary" style={{ marginLeft: 15 }}>SignIn</Button>
                            </div>
                        </div>
                    </header>
                </Affix>


            </div>
        );
    }
);
TopMenu.propTypes = {
    className: PropTypes.any.isRequired,
};
export default styled(TopMenu)`
.brand{
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration:none;
    font-size:32px
}
.navigation{
    position: relative;
}
.navigation-items a{
    position: relative;
    font-size: 1em;
    font-weight: 500;
    margin-left: 30px;
    transition: 0.3 ease;
    text-decoration:none
}
.navigation-items a::before{
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background:rgb(0, 132, 137);
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
}
.navigation-items a:hover::before {
    width: 100%;
}
`;

