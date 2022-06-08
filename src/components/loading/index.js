import React from 'react';
import { Spin } from 'antd';

import "../../App.css";

const Loading = () => (
  <div className='example'>
    <Spin size="large" tip='loading'/>
  </div>
);

export default Loading;