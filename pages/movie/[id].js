import React from 'react';
import { Row, Col } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import { MovieByID } from '../../hooks/service';
import MovieInfo from '../../components/MovieInfo';

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
            {Object.entries(detail)
              .filter(
                (obj) =>
                  obj[0] == 'Title' ||
                  obj[0] == 'Year' ||
                  obj[0] == 'Genre' ||
                  obj[0] == 'Director' ||
                  obj[0] == 'Actors' ||
                  obj[0] == 'Runtime',
              )
              .map((info, index) => (
                <MovieInfo
                  key={index}
                  infoTitle={info[0]}
                  infoValue={info[1]}
                />
              ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const movieInfo = await MovieByID(id);
  const movieDetail = movieInfo.data;
  return {
    props: { detail: movieDetail },
  };
}

export default MovieDetails;
