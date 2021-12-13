import React from 'react';
import styled from "styled-components";
import { Layout, Carousel, Image, Affix, Card, Form, Input, Row, Col, Select } from 'antd';
import card1 from '../../images/card1.jpeg';
const Main = ({ className }) => {
    return (
        <div className={className} style={{ marginTop: 80 }}>
            <h2 style={{ fontSize: 26, marginLeft: 20 }}>Explore Destinations</h2>
            <div className='card_content'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src={card1} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src={card1} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src={card1} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src={card1} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image src={card1} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default styled(Main)`
.card_content {
    display:flex;
}
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin:20px
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }
`;




