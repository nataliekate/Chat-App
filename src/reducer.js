import {
  socket
} from './index';

const reducer = (
  state = {
    pot: 0,
    snackBarIsOpen: false,
    name: null,
    names: [],
    mode: null,
    whoDidIt: null
  },
  action
) => {
  switch (action.type) {
    case 'PITCH_IN':
      // increment pot value
      // emit event to the web socket
      state = {
        ...state,
        pot: ++state.pot,
        mode: 'pitch'
      };
      socket && socket.emit('UPDATE_POT', state);
      break;
    case 'GET_ONE':
      // decrement pot value
      state = {
        ...state,
        pot: --state.pot,
        mode: 'get'
      };
      socket && socket.emit('UPDATE_POT', state);
      break;
    case 'DELIVER_UPDATED_POT_TO_REDUCER':
      // when the pot is updated by other users
      state = {
        ...state,
        pot: action.updatedPot.pot
      };
      break;
    case 'CURRENT_POT_TO_REDUCER':
      // put the assigned client's username to the pot
      state = {
        ...state,
        pot: action.pot
      };
      break;
    case 'ASSIGNED_USERNAME':
      // put the assigned client's username to the pot
      state = {
        ...state,
        name: action.name
      };
      break;
    case 'PUT_ALL_NAMES_TO_REDUCER':
      // put all of the active clients name to the reducer
      state = {
        ...state,
        names: action.names
      };
      break;
    case 'PICTHED_IN':
      // when another client emits an event
      // this will handle that event so that our
      // app can give a feed back
      state = {
        ...state,
        snackBarIsOpen: true,
        mode: 'pitch',
        whoDidIt: action.name
      };
      break;
    case 'GOT_ONE':
      // when another client emits an event
      // this will handle that event so that our
      // app can give a feed back
      state = {
        ...state,
        snackBarIsOpen: true,
        mode: 'get',
        whoDidIt: action.name
      };
      break;
    case 'ANOTHER_ONE_PITCHED_IN':
      // closes the current snack bar to make room for
      // a more recent one
      state = {
        ...state,
        snackBarIsOpen: false
      };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;