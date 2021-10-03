import React from 'react';
import { Col } from 'antd';

function MovieInfo({ infoTitle, infoValue }) {
  return (
    <>
      <Col span={12}>
        <span>{infoTitle}:</span>
      </Col>
      <Col span={12}>
        <span>{infoValue}</span>
      </Col>
    </>
  );
}

export default MovieInfo;
