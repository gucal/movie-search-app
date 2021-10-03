import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

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
      <Meta title={movieInfo.Title} description="This is the description" />
    </Card>
  );
}

export default MovieCard;
