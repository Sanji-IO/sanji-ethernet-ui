//-------------------------------------------------------------------
// Constants
//-------------------------------------------------------------------
export const GET_ETHERNETS = 'GET_ETHERNETS';
export const UPDATE_ETHERNET = 'UPDATE_ETHERNET';

//-------------------------------------------------------------------
// Actions
//-------------------------------------------------------------------

export const EthernetAction = ($q, ethernetService) => {
  'ngInject';
  const getEthernets = (options = { force: false }) => {
    return (dispatch, getState) => {
      const { ethernets } = getState();

      if (!options.force && ethernets.length) {
        return $q.when(ethernets).then(() => dispatch({ type: GET_ETHERNETS, payload: ethernets }));
      } else {
        return ethernetService.get().then(data => dispatch({ type: GET_ETHERNETS, payload: data }));
      }
    };
  };

  const updateEthernet = ethernet => {
    return dispatch => {
      return ethernetService.update(ethernet).then(() => dispatch({ type: UPDATE_ETHERNET, payload: ethernet }));
    };
  };

  return {
    getEthernets,
    updateEthernet
  };
};

//-------------------------------------------------------------------
// Reducers
//-------------------------------------------------------------------
const ethernet = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_ETHERNET:
      if (state.content.id !== payload.content.id) {
        return state;
      }
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};

export const ethernets = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ETHERNETS:
      return payload || state;
    case UPDATE_ETHERNET:
      return state.map(data => ethernet(data, { type, payload }));
    default:
      return state;
  }
};
