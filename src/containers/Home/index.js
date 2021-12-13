import PropTypes from "prop-types";
import React, { memo } from "react";
import { Layout, Carousel, Image, Affix, Card, Form, Input, Row, Col, Select, InputNumber, Button } from 'antd';
import styled from "styled-components";
import Main from '../Main';
import 'antd/dist/antd.css';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import FormItem from "antd/lib/form/FormItem";

const { Option } = Select;
const { Search } = Input;
const Home = memo(
    ({ className }) => {
        function onChange(a, b, c) {
        }

        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
        };


        return (
            <div className={className}>
                <div className="home_top">
                    <Carousel afterChange={onChange} autoplay className="carousel">
                        <Image
                            style={contentStyle}
                            src={banner1}
                            preview={false}
                        />
                        <Image
                            style={contentStyle}
                            src={banner2}
                            preview={false}
                        />
                        <Image
                            style={contentStyle}
                            src={banner3}
                            preview={false}
                        />
                    </Carousel >
                    <div class="center">
                        <div style={{ fontWeight: 'bold', fontSize: 28 }}>Maximum luxury. Exclusive sensation.</div>
                        <div style={{ fontSize: 14, marginBottom: 10 }}> compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.</div>
                        <Form>
                            <Input.Group compact>
                                <Select placeholder="Chọn loại" style={{ width: "20%" }} size="large">
                                    <Option value="Option1">Phòng cho gia đình</Option>
                                    <Option value="Option2">Phòng cho cặp đôi</Option>
                                    <Option value="Option2">Phòng đơn</Option>
                                </Select>
                                <Input style={{ width: '50%' }} placeholder="Nhập tên khách sạn" size="large" />
                                <InputNumber style={{ width: '20%' }} placeholder="Nhập khoảng giá" size="large" />
                                <Button style={{ width: '10%', backgroundColor: 'rgb(0, 132, 137)', color: '#fff' }} size="large">Find Hotels</Button>
                            </Input.Group>
                        </Form>
                    </div>
                </div>
                <div>
                    <Main />
                </div>

            </div>
        );
    }
);
Home.propTypes = {
    className: PropTypes.any.isRequired,
};
export default styled(Home)`
.home_top {
    position: relative;
    color: rgb(44, 44, 44);
    height:100%
  }
.center {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    background-color: rgb(255, 255, 255);
    width:80%;
    border-radius: 6px;
    padding: 28px 30px 30px;
  }
  .carousel { 
    width: 100%;
    height: auto;
  }
`;

