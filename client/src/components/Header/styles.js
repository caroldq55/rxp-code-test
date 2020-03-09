import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Brand = styled.div`
  padding: 5px 20px;
  font-weight: bold;
  font-size: 25px;
`;

export { HeaderContainer, Brand };
