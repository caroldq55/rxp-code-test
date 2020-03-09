import styled from 'styled-components';

const CartItemContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Price = styled.span`
  margin-left: 10px;
`;

export { CartItemContainer, ItemName, Price };
