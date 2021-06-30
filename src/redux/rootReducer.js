import { combineReducers } from 'redux';


import formDataReducer from './formData/formData.reducer';


const rootReducer = combineReducers({

    formData: formDataReducer,

});

export default rootReducer;