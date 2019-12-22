import {
  GET_DATA_USER_STORAGE,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_DATA_USER_STORAGE,
  FETCH_PROGRAM_LANGUAGE_DATA,
  LOGOUT,
  FETCH_ALL_POST,
} from '../constant/Configs';
import {AsyncStorage} from 'react-native';
const initialState = {
  data: [],
};
const saveDataStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // console.log('AsyncStorage save error: ' + error.message);
  }
}
export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case SET_DATA_USER_STORAGE:
      saveDataStorage ('USER', JSON.stringify (action.data));
      return {
        ...state,
        dataUser: action.data,
      };
    case GET_DATA_USER_STORAGE:
      return {
        ...state,
        dataStorage: action.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginSuccess: false,
      };
    case FETCH_PROGRAM_LANGUAGE_DATA:
      return {
        ...state,
        dataMasterProgram: action.data,
      };
    case LOGOUT:
      return {
        state: initialState,
      };
    case FETCH_ALL_POST:
      return {
        ...state,
        dataTutorial: action.data,
      };

    default:
      return state;
  }
}
