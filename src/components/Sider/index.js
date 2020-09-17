import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { ProjectOutlined, DollarCircleOutlined } from '@ant-design/icons';

import { MENU_KEYS } from '../../utils/constants/constants';
import config from './config';
import { StyledSider } from './StyledSider';

const menuItems = [
  {
    id: 0,
    name: MENU_KEYS.DASHBOARD,
    label: 'Dashboard',
    icon: <DollarCircleOutlined />,
    route: '/',
  },
  {
    id: 1,
    name: MENU_KEYS.MOVIES,
    label: 'Movies',
    icon: <ProjectOutlined />,
    route: '/movies',
  },
];

function Sider(props) {
  const { location } = props;
  let defaultMenuSelected = '';

  if (location.pathname) {
    switch (location.pathname) {
      case '/':
        defaultMenuSelected = MENU_KEYS.DASHBOARD;
        break;
      case '/movies':
      case '/movies/':
        defaultMenuSelected = MENU_KEYS.MOVIES;
        break;
      default:
        defaultMenuSelected = '';
        break;
    }
  }

  const menus = menuItems.map(item => (
    <Menu.Item key={item.name} icon={item.icon}>
      {item.label}
    </Menu.Item>
  ));

  const handleClickMenu = e => {
    const menuSelected = menuItems.find(item => item.name === e.key);
    if (menuSelected) {
      props.history.push(menuSelected.route || '/');
    }
  };

  return (
    <StyledSider collapsible>
      <div className="logo">
        <a href="/">
          <h1>Enouvo</h1>
        </a>
      </div>
      <Menu
        trigger={null}
        theme={config.theme}
        mode={config.mode}
        defaultSelectedKeys={defaultMenuSelected}
        onClick={handleClickMenu}
      >
        {menus}
      </Menu>
    </StyledSider>
  );
}

Sider.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Sider);
