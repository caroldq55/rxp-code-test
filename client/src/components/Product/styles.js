import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 5px;
  position: relative;
`;

const ProductImage = styled.img`
  width: 180px;
`;

const ProductInfo = styled.div`
  margin-top: 10px;
  font-weight: 500;
`;

const ProductName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  color: #333;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 5px;
`;

export {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductName,
  ButtonWrapper
};
