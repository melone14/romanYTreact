import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  throwError: 'THROW ERROR',
  consentToggle: 'CONSENT TOGGLE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      console.log(action);
      return {
        ...state,
        [action.field]: action.value,
      };

    case actionTypes.clearValues:
      return {
        ...action.initialValues,
      };

    case actionTypes.consentToggle:
      return {
        ...state,
        conset: !state.conset,
      };

    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };

    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearValues, initialValues });
  };

  const throwError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    throwError,
    handleToggleConsent,
  };
};