import styled from 'styled-components';

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;

  .login-form-button {
    width: 100%;
    min-width: 300px;
  }
`;

const AuthContainer = styled.div`
  margin-top: 90px;
  min-width: 368px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 33px;
    font-family: Avenir, helvetica neue, Arial, Helvetica, sans-serif;
    margin-bottom: initial;
  }
`;

const Content = styled.div`
  margin-top: 20px;
`;

export {
  AuthWrapper,
  AuthContainer,
  Header,
  Content,
}
