import {
  START_LOADING_PETS,
  SUCCESSFULLY_LOADED_PETS,
  SUCCESSFULLY_CREATED_PET,
  SUCCESSFULLY_LOADED_PET_FEEDINGS
} from '../actions';

const initialState = {
  loadingState: 'notStarted',
  list: [],
  errors: {}
};

// IMPORTANT! This reducer gets functionality by being added to the combineReduer (RootReducer)

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_PETS:
      return {
        ...state,
        loadingState: 'inProgress'
      };
    case SUCCESSFULLY_LOADED_PETS:
      return {
        loadingState: 'successful',
        list: action.payload
      };
    case SUCCESSFULLY_CREATED_PET:
      return {
        ...state,
        list: state.list.concat(action.payload),
        errors: {}
      };
    case SUCCESSFULLY_LOADED_PET_FEEDINGS:
      return {};

    default:
      return state;
  }
}
