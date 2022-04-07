import { useState } from "react";

export const useForm = (initialstate = {}) => {
  const [state, setState] = useState(initialstate);

  const reset = () => {
    setState(initialstate);
  };

  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return [state, reset, handleInputChange];
};
