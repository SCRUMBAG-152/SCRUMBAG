export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;

      firestore.collection('tasks').add({
          ...task,
          authorId: authorId,
          createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_TASK', task });
      }).catch((err) => {
          dispatch({type: 'CREATE_PROJECT_ERROR', err});
      })
    }
  };

  export const deleteTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();

      firestore.collection('tasks')
      .doc(task.id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_TASK' });
      }).catch((err) => {
          dispatch({type: 'DELETE_TASK_ERROR', err});
      })
    }
  };

  export const clearTasks = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      dispatch({ type: 'CLEAR_TASKS'})
    }
  };

  export const dndTask = (result) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('tasks')
      .doc(result.draggableId)
      .update({
        column: result.destination.droppableId
      })
      .then(() => {
        dispatch({ type: 'UPDATE_TASK' });
      }).catch((err) => {
          dispatch({type: 'UPDATE_TASK_ERROR', err});
      })
    }
  };