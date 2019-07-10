const inititalState = {
    list : [],
    loading : false,
    error : false
}

const profileReducer = (state = inititalState, action) => {

    const { type, payload } = action;

    switch(type) {

        case 'SET_PROFILES_FULFILLED':
            return {
                ...state,
                list : payload.profiles,
                skills : payload.skills,
                error : false,
                loading : false
            }

        case 'ADD_PROFILE_FULFILLED':
        
            return {
                ...state,
                list : [...state.list, payload],
                error : false,
                loading : false
            }

        case 'GET_PROFILE_FULFILLED':

            return {
                ...state,
                list : state.list,
                profile : payload,
                error : false,
                loading : false,
            }

        case 'UPDATE_PROFILE_FULFILLED':

            const search = state.list.filter(x => x.id === payload.id );
            const index = state.list.indexOf(search[0]);

            state.list[index].fullname = payload.fullname
            state.list[index].age = payload.age
            state.list[index].address = payload.address
            state.list[index].email = payload.email

            return {
                ...state,
                list : state.list,
                loading : false,
                profile : state.profile,
                error : false
            }

        case 'DELETE_PROFILE_FULFILLED':

            let find = state.list.filter(x => x.id === payload );
            state.list.splice(state.list.indexOf(find[0]), 1);

            return {
                ...state,
                list : state.list
            }

        case 'SET_PROFILES_PENDING':
        case 'ADD_PROFILE_PENDING':
        case 'UPDATE_PROFILE_PENDING':
        case 'GET_PROFILE_PENDING':

            return state = {
                ...state,
                profile : state.profile,
                loading : true
            }


        default : 
            return state;
    }
}

export default profileReducer;