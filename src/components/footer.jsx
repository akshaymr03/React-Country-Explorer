import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-row">
        <div className="icon-wrapper"><FacebookOutlined /></div>
        <div className="icon-wrapper"><TwitterOutlined /></div>
        <div className="icon-wrapper"><LinkedinOutlined /></div>
        <div className="icon-wrapper"><YoutubeOutlined /></div>
      </div>
      <p className="footer-email">Example@email.com</p>
      <p className="footer-copyright">
        Copyright © 2020 Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
