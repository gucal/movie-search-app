import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { MovieByID } from '../../hooks/service';

function MovieDetails({ detail }) {
  return (
    <div className="container">
      <Head>
        <title>{detail.Title}</title>
      </Head>
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Image
            className="movie-poster"
            src={detail.Poster}
            width={400}
            height={600}
          />
        </Col>
        <Col xs={24} lg={12}>
          <Row gutter={[0, 12]}>
            <Col span={12}>
              <span>Title:</span>
            </Col>
            <Col span={12}>
              <span>{detail.Title}</span>
            </Col>
            <Col span={12}>
              <span>Year:</span>
            </Col>
            <Col span={12}>
              <span>{detail.Year}</span>
            </Col>
            <Col span={12}>
              <span>Genre:</span>
            </Col>
            <Col span={12}>
              <span>{detail.Genre}</span>
            </Col>
            <Col span={12}>
              <span>Director:</span>
            </Col>
            <Col span={12}>
              <span>{detail.Director}</span>
            </Col>
            <Col span={12}>
              <span>Actors:</span>
            </Col>
            <Col span={12}>
              <span>{detail.Actors}</span>
            </Col>
            <Col span={12}>
              <span>Runtime: </span>
            </Col>
            <Col span={12}>
              <span>{detail.Runtime}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const movieInfo = await MovieByID(id);
  const detail = movieInfo.data;
  return {
    props: { detail: detail }, // will be passed to the page component as props
  };
}

export default MovieDetails;
