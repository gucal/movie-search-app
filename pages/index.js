import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, Input, Pagination } from 'antd';
import { getAction } from '../hooks/service';
import MovieCard from '../components/MovieCard';

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movieData, setMovieData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    if (searchParams.length > 0) {
      const apiCall = setTimeout(() => {
        getAction(searchParams, pageNumber).then((res) => {
          setTotalResults(res.data.totalResults);
          setMovieData(res.data.Search);
        });
      }, 300);
      return () => clearTimeout(apiCall);
    }
  }, [searchParams, pageNumber]);

  const pageChange = (currentPage) => {
    setPageNumber(currentPage);
  };

  return (
    <div className="container">
      <Head>
        <title>Movie App</title>
      </Head>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Input
            onChange={(e) => {
              setSearchParams(e.target.value);
              setPageNumber(1);
            }}
            style={{ width: '100%' }}
          />
        </Col>
        {movieData &&
          movieData.map((movieInfo, index) => (
            <Col key={index} xs={24} lg={8}>
              <MovieCard movieInfo={movieInfo} />
            </Col>
          ))}
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            current={pageNumber}
            onChange={pageChange}
            showSizeChanger={false}
            total={totalResults}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
