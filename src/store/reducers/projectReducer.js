const initState = {
  }
  
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            break

        case 'CREATE_COLUMN':
            console.log('create column', action.column);
            return state;

        case 'CREATE_COLUMN_ERROR':
            console.log('create column error', action.err);
            break
        case 'DELETE_COLUMN':
            console.log('deleted column');
            return state;
        case 'DELETE_COLUMN_ERROR':
            console.log('delete column error', action.err);
            break;
        default:
            return state;
    }
}
  
export default projectReducer;