import {
  START_LOADING_DEVICES,
  SUCCESSFULLY_LOADED_DEVICES,
  SUCCESSFULLY_CREATED_DEVICE,
  SUCCESSFULLY_LOADED_DEVICE_PET
} from '../actions';

const initialState = {
  loadingState: 'notStarted',
  list: [],
  errors: {}
};

// IMPORTANT! This reducer gets functionality by being added to the combineReduer (RootReducer)

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_DEVICES:
      return {
        ...state,
        loadingState: 'inProgress'
      };
    case SUCCESSFULLY_LOADED_DEVICES:
      return {
        loadingState: 'successful',
        list: action.payload
      };
    case SUCCESSFULLY_CREATED_DEVICE:
      return {
        ...state,
        list: state.list.concat(action.payload),
        errors: {}
      };
    case SUCCESSFULLY_LOADED_DEVICE_PET:
      return {};

    default:
      return state;
  }
}
