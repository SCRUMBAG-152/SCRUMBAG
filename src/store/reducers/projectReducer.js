const initState = {
  }
  
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create task', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create task error', action.err);
        default:
            return state;
    }
}
  
export default projectReducer;