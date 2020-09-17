import { css } from 'styled-components';

const SiderStyle = css`
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  h1 {
    display: inline-block;
    margin: 0 0 0 12px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    vertical-align: middle;
    animation: fade-in;
    animation-duration: 0.3s;
  }
`;

const TriggerStyle = css`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: #1890ff;
  }
`;

const SiteLayOutStyle = css`
  background: #fff;
`;

export { SiderStyle, TriggerStyle, SiteLayOutStyle };
export default SiderStyle;
