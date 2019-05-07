const initState = {
}

const memberReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_ROLE':
            console.log('update role', action.event);
            return state;

        case 'UPDATE_ROLE_ERROR':
            console.log('update role error', action.err);
            break
        default:
            return state;
    }
}

export default memberReducer;