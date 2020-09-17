/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';

import { getMoviesAsync, selectMovies, selectIsFetchingMovies, selectTotalMovies } from './moviesSlice';
import { MoviesWrapper } from './styled';

const columns = [
  {
    title: 'Name',
    width: 200,
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Time (minutes)',
    width: 100,
    align: 'center',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Release Date',
    width: 180,
    dataIndex: 'releaseDate',
    key: 'releaseDate',
    render: value => moment(value).format('MMMM DD, YYYY'),
  },
];

export function Movies(props) {
  const movies = useSelector(selectMovies);
  const isFetching = useSelector(selectIsFetchingMovies);
  const totalMovies = useSelector(selectTotalMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      limit: 10,
      offset: 0,
    };

    dispatch(getMoviesAsync(params));
  }, []);

  const pagination = {
    total: totalMovies,
  }

  const handleChangePagination = (pagination) => {
    const { current, pageSize } = pagination;

    const params = {
      limit: pageSize,
      offset: pageSize * (current - 1),
    };

    dispatch(getMoviesAsync(params));
  };

  return (
    <MoviesWrapper>
      <h1>List of Movies</h1>
      <Table
        loading={isFetching}
        pagination={pagination}
        columns={columns}
        dataSource={movies || []}
        onChange={handleChangePagination}
      />
    </MoviesWrapper>
  );
}

Movies.propTypes = {};

export default memo(Movies);
