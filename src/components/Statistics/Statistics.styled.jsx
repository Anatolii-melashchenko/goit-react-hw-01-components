import styled from 'styled-components';
import { randomHexColor } from 'utils';


export const Title = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  padding: 25px;
  text-align: center;
`;

export const StatsEl = styled.li`
  background-color: ${randomHexColor};
  border-top: 0.2px solid #fffcfc;
  &:not(:last-child) {
    border-right: 0.2px solid #ffffff;
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
  width: 100%;
  height: 80px;
`;

export const Label = styled.span`
  font-size: 15px;
  color: white;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;
