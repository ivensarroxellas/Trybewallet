// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_ACTION':
    return { ...state,
      email: action.payload1,
    };
  default:
    return state;
  }
};
export default user;
