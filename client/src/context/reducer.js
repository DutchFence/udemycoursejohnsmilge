import { DISPLAY_ALERT, CLEAR_ALERT} from "./actions";

const reducer =  (state,action) => {

    if (action.type === DISPLAY_ALERT){
        return {
            ...state,
            showAlert: true,
            alertType: action.alertType,
            alertText: action.alertText
        };
    } else if (action.type === CLEAR_ALERT){
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: ''
        };
    }
    throw new Error(`no such action :${action.type}`);

};

export default reducer;