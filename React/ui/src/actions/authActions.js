import * as actionTypes from './actionTypes';

export const signInRequest =()=>{
    return {type:actionTypes.SIGN_IN_REQUEST}
}

export const signInSuccess = ()=>{
    return {
        type:actionTypes.SIGN_IN_SUCCESS
    }
} 

export const signInFailed = (err)=>{
    return {
    type:actionTypes.SIGN_IN_FAILED,
    error:err

    }
}
export const removeError = ()=>{
    return {type:actionTypes.REMOVE_ERROR}
}

export const signIn= (userData)=>{
    return async(dispatch,{getFirebase,getFirestore})=>{
        dispatch(signInRequest())
        const firebase = getFirebase();
        try{
            let data = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
            dispatch(signInSuccess())
        }
        catch(err)
        {
            dispatch(signInFailed(err))
            setTimeout(()=>{
                dispatch(removeError())
            },2000)
        }

    }
}


export const registerRequest =()=>{
    return {
        type:actionTypes.REGISTER_REQUEST
    }
}
export const registerSuccess = ()=>{
    return {
        type:actionTypes.REGISTER_SUCCESS
    }
}

export const registerFailed = (err)=>{
    return{
        type:actionTypes.REGISTER_FAILED,
        error:err
    }
}

export const register = (userData)=>{
    return (dispatch,{getFirebase,getFirestore})=>{
        dispatch(registerRequest());
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
            const res = await firestore.collection('users').doc(data.user.uid).set({
                email:userData.email,
                resumeIds:[]
            });
            dispatch(registerSuccess());
        }).catch((err)=>{
            dispatch(registerFailed(err));
            setTimeout(()=>{
                dispatch(removeError())
            },2000)
        })
    }
}

export function signout(){
    return (dispatch,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:actionTypes.SIGN_OUT})
        }).catch((err)=>{
            dispatch({type:actionTypes.SIGN_OUT_FAILED,error:err})
        })
    }
}