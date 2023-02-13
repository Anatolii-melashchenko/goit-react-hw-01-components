import styled from 'styled-components';

export const StatsEl = styled.li`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
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
