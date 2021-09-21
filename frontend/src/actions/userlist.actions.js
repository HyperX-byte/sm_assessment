import axios from "../helpers/axios";
import { userListConstants } from "./constants";
import { api } from '../urlConfig';

export const getAllEmails = () => {
    return async dispatch => {
        dispatch({ type: userListConstants.GET_ALL_EMAILS_REQUEST });
        const res = await axios.get(`/getuseremails`);
        console.log(res);
        if(res.status === 200){
            const {emailList} = res.data;
            dispatch({
                type: userListConstants.GET_ALL_EMAILS_SUCCESS,
                payload: { emails: emailList }
            });
        }else{
            dispatch({
                type: userListConstants.GET_ALL_EMAILS_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}