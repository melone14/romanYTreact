import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 24px 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const NameWrapper = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 0 12px 0 0;
`;

export const Attendance = styled(NameWrapper)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 24px;
  background: ${({ average, theme }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
