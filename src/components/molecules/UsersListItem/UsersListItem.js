import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, TextWrapper, NameWrapper, Attendance, StyledAverage } from './UserListItem.styled';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <TextWrapper>
        <NameWrapper>{name}</NameWrapper>
        <Attendance>attendance: {attendance}</Attendance>
      </TextWrapper>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
