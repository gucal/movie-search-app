import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function MovieCard({ movieInfo }) {
  return (
    <Card
      style={{ width: 350 }}
      cover={
        <img
          width={300}
          height={500}
          alt="example"
          src={`${movieInfo.Poster}`}
        />
      }
    >
      <Meta
        title={movieInfo.Title}
        style={{ textAlign: 'center' }}
        description={movieInfo.Year}
      />
    </Card>
  );
}

export default MovieCard;
