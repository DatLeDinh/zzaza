import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Hệ thống',
        path: '/about',
    },
];
const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid col={4} mdCol={4} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">TỔNG ĐÀI HỖ TRỢ</div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>1111111111</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>1111111111</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>1111111111</strong>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">Về YOLO</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.to}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Chăm sóc khách hàng</div>
                        <div className="footer__content">
                            {footerCustomerLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.to}>{item.display}</Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo"></img>
                            </Link>
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
};

export default Footer;
