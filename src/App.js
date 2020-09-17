/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';

import RoutesComponent from './components/Routes/RoutesComponent';
import { selectUser, getOwnerUserInfoAsync } from './features/Auth/authSlice';
import { isAuthenticated } from './utils/common';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated() && !user) {
      dispatch(getOwnerUserInfoAsync());
    }
  }, []);

  return (
    <div className="App">
      <RoutesComponent />
    </div>
  );
}

export default App;
