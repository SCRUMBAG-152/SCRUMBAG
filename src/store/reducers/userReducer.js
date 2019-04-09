const initState = {
  }
  
  const userReducer = (state = initState, action) => {
    switch(action.type){
      case 'UPDATE_USER':
        console.log('update success')
        return {
          ...state,
        }
      case 'UPDATE_USER_ERROR':
        console.log('update error')
        return{
          ...state,
          authError: action.err.message //get an error message from the action
        }
      default:
        return state
    }
  };
  
  export default userReducer;