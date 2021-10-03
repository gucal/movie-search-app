import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, Pagination } from 'antd';

import { SearchMovieService } from '../hooks/service';
import MovieCard from '../components/MovieCard';
import SearchInput from '../components/SearchInput';

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movieData, setMovieData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    if (searchParams.length > 0) {
      const apiCall = setTimeout(() => {
        SearchMovieService(searchParams, pageNumber).then((res) => {
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

  const onChangeInputValue = async (value) => {
    setSearchParams(value);
    setPageNumber(1);
  };

  return (
    <div className="container">
      <Head>
        <title>Movie App</title>
      </Head>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <SearchInput onChange={onChangeInputValue} />
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            {movieData &&
              movieData.map((movieInfo, index) => (
                <Col key={index} xs={24} lg={8}>
                  <Link href={`/movie/${movieInfo.imdbID}`}>
                    <a>
                      <MovieCard movieInfo={movieInfo} />
                    </a>
                  </Link>
                </Col>
              ))}
          </Row>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            style={{ display: movieData && movieData.length < 1 && 'none' }}
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
