import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  ProjectOutlined,
  ProfileOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

// import { HOME, MOVIES } from '../../utils/constants/routes';

import config from './config';
import {
  StyledSider,
  StyledMenuFoldOutlined,
  StyledMenuUnfoldOutlined,
} from './StyledSider';

const menuItems = [
  {
    id: 0,
    name: 'DASHBOARD',
    label: 'Dashboard',
    icon: <DollarCircleOutlined />,
    route: '/',
  },
  {
    id: 2,
    name: 'MOVIES',
    label: 'Movies',
    icon: <ProjectOutlined />,
    route: '/movies',
  },
];

function Sider(props) {
  const { history } = props;
  const [collapsed, setCollapsed] = useState(false);

  const menus = menuItems.map(item => (
    <Menu.Item key={item.id} icon={item.icon}>
      {item.label}
    </Menu.Item>
  ));

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenu = e => {
    history.push(menuItems[e.key].route);
  };

  return (
    <StyledSider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <a href="/">
          {/* <img src="" alt="logo" /> */}
          <h1>Enouvo</h1>
        </a>
      </div>
      <Menu
        theme={config.theme}
        mode={config.mode}
        defaultSelectedKeys={['0']}
        onClick={handleClickMenu}
      >
        {menus}
        <li>
          {collapsed ? (
            <StyledMenuUnfoldOutlined onClick={toggleSider} />
          ) : (
            <StyledMenuFoldOutlined onClick={toggleSider} />
          )}
        </li>
      </Menu>
    </StyledSider>
  );
}

Sider.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Sider);
