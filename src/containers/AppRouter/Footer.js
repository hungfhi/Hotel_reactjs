// import React from 'react'
// import styled from "styled-components";
// import { StarOutlined, FacebookOutlined, StarTwoTone } from '@ant-design/icons';
// export const Footer = ({ className }) => {
//     return (
//         <div className={className}>
//             <footer>
//                 <div class="container">
//                     <div class="noi-dung about">
//                         <h2>Về Chúng Tôi</h2>
//                         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium dolores alias ipsa vel hic
//                             tempore exercitationem ipsam explicabo repudiandae ut consectetur qui, earum at nostrum perspiciatis
//                             asperiores necessitatibus facilis esse.
//                         </p>
//                         <ul class="social-icon">
//                             <li><a href=""><FacebookOutlined /> </a></li>
//                             <li><a href=""><i class="fa fa-twitter"></i></a></li>
//                             <li><a href=""><i class="fa fa-instagram"></i></a></li>
//                             <li><a href=""><i class="fa fa-youtube"></i></a></li>
//                         </ul>
//                     </div>
//                     <div class="noi-dung links">
//                         <h2>Đường Dẫn</h2>
//                         <ul>
//                             <li><a href="#">Trang Chủ</a></li>
//                             <li><a href="#">Về Chúng Tôi</a></li>
//                             <li><a href="#">Thông Tin Liên Lạc</a></li>
//                             <li><a href="#">Dịch Vụ</a></li>
//                             <li><a href="#">Điều Kiện Chính Sách</a></li>
//                         </ul>
//                     </div>
//                     <div class="noi-dung contact">
//                         <h2>Thông Tin Liên Hệ</h2>
//                         <ul class="info">
//                             <li>
//                                 <span><i class="fa fa-map-marker"></i></span>
//                                 <span>Đường Số 1<br />
//                                     Quận 1, Thành Phố Hồ Chí Minh<br />
//                                     Việt Nam</span>
//                             </li>
//                             <li>
//                                 <span><i class="fa fa-phone"></i></span>
//                                 <p><a href="#">+84 123 456 789</a>
//                                     <br />
//                                     <a href="#">+84 987 654 321</a></p>
//                             </li>
//                             <li>
//                                 <span><i class="fa fa-envelope"></i></span>
//                                 <p><a href="#">diachiemail@gmail.com</a></p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }
// export default styled(Footer)`


// .social-icon{
//     margin-top: 20px;
//     display: flex;
// }

// .social-icon li {
//     list-style: none;
// }
// .social-icon li a{
//     display: inline-block;
//     width: 40px;
//     height: 40px;
//     background: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-right: 10px;
//     text-decoration: none;
//     border-radius: 4px;
// }

// .social-icon li a:hover{
//     background: #f00;
// }

// .social-icon li a .fa{
//     color: #fff;
//     font-size: 20px;
// }

// .links h2{
//     position: relative;
//     color: #fff;
//     font-weight: 500;
//     margin-bottom: 15px;
// }

// .links h2{
//      position: relative;
//      color: #fff;
//      font-weight: 500;
//      margin-bottom: 15px;
//  }
// .links h2::before{
//      content: '';
//      position: absolute;
//      bottom: -5px;
//      left: 0;
//      width: 50px;
//      height: 2px;
//      background: #f00;
//  }
// .links{
//     position: relative;
//     width: 25%;
//  }
//  .links ul li{
//      list-style: none;
//  }
//  .links ul li a{
//      color: #999;
//      text-decoration: none;
//      margin-bottom: 10px;
//      display: inline-block;
//  }
// .links ul li a:hover{
//      color: #fff;
//  }

// .contact h2{
//     position: relative;
//     color: #fff;
//     font-weight: 500;
//     margin-bottom: 15px;
// }

// .contact h2::before{
//     content: '';
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     width: 50px;
//     height: 2px;
//     background: #f00;
// }

// .contact{
//     width: calc(35% - 60px);
//     margin-right: 0 !important;
// }

// .contact .info{
//     position: relative;
// }
// .contact .info li{
//     display: flex;
//     margin-bottom: 16px;
// }
// .contact .info li span:nth-child(1) {
//     color: #fff;
//     font-size: 20px;
//     margin-right: 10px;
// }

// .contact .info li span{
//     color: #999;
// }

// .contact .info li a{
//     color: #999;
//     text-decoration: none;
// }

// .btn {
//     display: inline-block;
//     background: transparent;
//     color: inherit;
//     font: inherit;
//     border: 0;
//     outline: 0;
//     padding: 0;
//     margin-top:16px;
//     transition: all 200ms ease-in;
//     cursor: pointer;
// }
// .btn--primary {
//     background: #222;
//     color: #fff;
//     box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
//     border-radius: 2px;
//     padding: 8px 24px;
// }
// .btn--primary:hover {
//     background: #f00;
// }
// .btn--primary:active {
//     background: #f00;
//     box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
// }

// .form__field {
//     width: 90%;
//     background: #fff;
//     color: #a3a3a3;
//     font: inherit;
//     box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1);
//     border: 0;
//     outline: 0;
//     padding: 8px 4px;
// }

// @media  (max-width: 768px){
//     footer{
//         padding: 40px;

//     }
//     footer .container{
//         flex-direction: column;
//     }
//     footer .container .noi-dung{
//         margin-right: 0;
//         margin-bottom: 40px;
//     }
//     footer .container, .noi-dung.about, .links, .contact{
//         width: 100%;
//     }
// }

// `;


import React from 'react';
import styled from "styled-components";
import { GitlabOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
import footers from '../../images/footers.svg'
import banner1 from '../../images/banner1.jpg';
const Footer = ({ className }) => {
    return (
        <div className={className}>
            <footer className="footer" style={{ backgroundImage: `url(${footers})` }}>
                <div >
                    <a>
                        <h3 className='text_hfoot'><GitlabOutlined /> &nbsp;&nbsp;Travel</h3>
                    </a>
                </div>
                <div className="text_cfoot">
                    <div className='text_cfoot_item'>
                        <Link to="/">Hotels</Link>
                        <Link to="/listing">Listing</Link>
                        <Link to="/log_in">Agent</Link>
                        <Link to="/sign_in">Pricing</Link>
                    </div>
                </div>
                <div class="copyright">Copyright @ 2021 RedQ, Inc.</div>
            </footer>
        </div>
    )
}
export default styled(Footer)`
.footer{
    width: 100%;
    background-color: rgb(255, 255, 255);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    padding: 47px 0px 66px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    
}
.text_hfoot {
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 700;
    color:rgb(0, 132, 137);
    margin: 0px 0px 0px 10px;
}
.text_cfoot {
    margin-top: 40px;
    padding-left: 10px;
    display:flex
}
.text_cfoot_item a {
    position: relative;
    font-size: 1em;
    font-weight: 500;
    margin-left: 100px;
    transition: 0.3 ease;
    color: #000;
    text-decoration:none
}
.text_cfoot_item a::before{
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background:#000;
    bottom: 0;
    left: 0;
    transition: 0.3s ease;
}
.text_cfoot_item a:hover::before{
    width: 100%;
}
.copyright {
    color: rgb(144, 144, 144);
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    margin-top: 30px;
}
`;