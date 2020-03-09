import styled from 'styled-components';

const ShopingCartContainer = styled.div`
  margin: 5px;
  border: 0.0625em solid #dcdfe1;
  border-radius: 0.25em;
  min-height: 50px;
`;

const Heading = styled.div`
  padding: 5px 10px;
  background-color: #ffd633;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 10px;
`;

const TotalPrice = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

export { ShopingCartContainer, Heading, Content, TotalPrice };
