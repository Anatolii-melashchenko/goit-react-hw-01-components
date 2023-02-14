import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  width: 50px;
  margin-right: 10px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
export const Status = styled.span`
  margin-right: 10px;
  padding: 6px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return 'green';
      default:
        return 'red';
    }
  }};
`;
