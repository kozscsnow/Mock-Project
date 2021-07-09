import React from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import './SocialMedia.scss';

function SocialMedia(props) {
  return (
    <div className="social">
      <p className="social__text">Sign in with social platforms</p>
      <div className="social__media">
        <a href="# " className="social__icon">
          <FacebookOutlined />
        </a>
        <a href="# " className="social__icon">
          <TwitterOutlined />
        </a>
        <a href="# " className="social__icon">
          <GoogleOutlined />
        </a>
        <a href="# " className="social__icon">
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
