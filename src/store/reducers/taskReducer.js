const initState = {
}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
          console.log('create task', action.task);
          return state;

    case 'CREATE_TASK_ERROR':
          console.log('create task error', action.err);
          break;
    case 'DELETE_TASK':
          console.log('deleted task');
          return state;
    case 'DELETE_TASK_ERROR':
          console.log('create task error', action.err);
          break;
    case 'UPDATE_TASK':
          console.log('updated task');
          return state;
    case 'UPDATE_TASK_ERROR':
          console.log('update task error', action.err);
          break;
    case 'CLEAR_TASKS':
          //state=initState;
          return null;  
      default:
          return state;
  }
}

export default taskReducer;