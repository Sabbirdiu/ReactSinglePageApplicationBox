export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state, //transactions is the initial state name
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'Add_Transaction':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions], //transactions is the initial state name
      };

    default:
      return state;
  }
};
