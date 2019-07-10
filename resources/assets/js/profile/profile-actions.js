import swal from 'sweetalert';
import axios from 'axios';
import { createAsyncAction } from 'redux-promise-middleware-actions';

const getProfile = createAsyncAction('GET_PROFILE', async (id) => {
    let response  = await axios.get('/api/profile/'+id);
    return response.data
}); 
  
const getProfiles = createAsyncAction('SET_PROFILES', async () => {
    let response  = await axios.get('/api/profiles');
    return response.data;
}); 

const addProfile = createAsyncAction('ADD_PROFILE', async (data, skills) => {
    let response  = await axios.post('/api/save', { data, skills } );
    return response.data;
});

const updateProfile = createAsyncAction('UPDATE_PROFILE', async (id, data, skills) => {
    
    let response  = await axios.put('/api/update/'+id, { data, skills });
    return response.data;
});

const deleteProfile = createAsyncAction('DELETE_PROFILE', async (id) => {
    
    let response  = await axios.delete('/api/delete/'+id);
    return response.data;
});

//////////////////////////////////////////////////////////////////////////////////////////////
export function retrieveProfile(id) {
    return dispatch => {
        dispatch( getProfile(id)) 
    }
}

export function setProfile() {
    return dispatch => {
        dispatch( getProfiles()) 
    }
}

export function saveProfile(data, skills) {
    return dispatch => {
        dispatch( addProfile(data, skills));
        window.location.href = '/profiles'
    }
}

export function editProfile(id, data, skills) {
    return dispatch => {
        dispatch( updateProfile(id, data, skills)) 
        window.location.href = '/profiles'
    }
}

export function removeProfile(id) {
    return dispatch => {
        dispatch( deleteProfile(id)) 
        swal({
            title: "Successfully Deleted.",
            text: "",
            icon: "success"
        }).then((ok) => {
            if(ok) {
                window.location.href = '/profiles'
            }
        });
    }
}


