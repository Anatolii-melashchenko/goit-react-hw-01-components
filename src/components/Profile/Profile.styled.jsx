import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  width: 80px;
  border-radius: 50%;
  background-color: #edebeb;
  margin-bottom: 25px;
`;
export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
`;
export const UserInfo = styled.p`
  font-size: 13px;
  color: #979797;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const StatsEl = styled.li`
  background-color: #f0ecec;
  border-top: 0.2px solid #cecbcb;
  &:not(:last-child) {
    border-right: 0.2px solid #cecbcb;
  }
  &:last-child {
    border-bottom-right-radius: 6px;
  }
  &:first-child {
    border-bottom-left-radius: 6px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 83px;
  height: 80px;
`;
export const Label = styled.span`
  font-size: 13px;
  color: #979797;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 15px;
`;
