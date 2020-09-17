import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space } from 'antd';
import moment from 'moment';

import { getMoviesAsync, selectMovies, selectIsFetchingMovies, selectTotalMovies } from './moviesSlice';
import { MoviesWrapper } from './styled';

export function Movies(props) {
  const movies = useSelector(selectMovies);
  const isFetching = useSelector(selectIsFetchingMovies);
  const totalMovies = useSelector(selectTotalMovies);
  const dispatch = useDispatch();

  console.log('movies', movies)

  useEffect(() => {
    const params = {
      limit: 10,
      offset: 0,
    };

    dispatch(getMoviesAsync(params));
  }, []);

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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const pagination = {
    total: totalMovies,
  }

  const onChange = (pagination) => {
    console.log('pagination', pagination);
    const { current, pageSize, total } = pagination;

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
        onChange={onChange}
      />
    </MoviesWrapper>
  );
}

Movies.propTypes = {};

export default Movies;
