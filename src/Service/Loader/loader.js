import React from 'react';
import { Spin } from 'antd';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loaderList">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
