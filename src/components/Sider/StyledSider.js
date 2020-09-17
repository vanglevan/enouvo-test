import styled from 'styled-components';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { SiderStyle, SiteLayOutStyle, TriggerStyle } from './siderStyles';

const StyledSider = styled(Layout.Sider)`
  ${SiderStyle};
`;

const StyledHeader = styled(Layout.Header)`
  ${SiteLayOutStyle};
  padding: 0;
`;

const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  ${TriggerStyle};
`;

const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  ${TriggerStyle};
`;

export {
  StyledSider,
  StyledHeader,
  StyledMenuFoldOutlined,
  StyledMenuUnfoldOutlined,
};
export default StyledSider;
