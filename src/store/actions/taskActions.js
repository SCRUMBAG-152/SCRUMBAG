/* export const createTask = (task) => {
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
  }; */

export const createTask = (task) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const ref = firestore.collection('cards').doc();

    ref.set({
      ...task,
      id: ref.id,
      authorId: authorId,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_TASK', task });
    }).catch((err) => {
      dispatch({ type: 'CREATE_TASKS_ERROR', err });
    })
  }
};

export const deleteTask = (taskID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection('cards')
      .doc(taskID)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_TASK' });
      }).catch((err) => {
        dispatch({ type: 'DELETE_TASK_ERROR', err });
      })
  }
};

export const clearTasks = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: 'CLEAR_TASKS' })
  }
};

export const dndTask = (result) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('cards')
      .doc(result.cardID)
      .update({
        laneId: result.destinationLaneID
      })
      .then(() => {
        dispatch({ type: 'UPDATE_TASK' });
      }).catch((err) => {
        dispatch({ type: 'UPDATE_TASK_ERROR', err });
      })
  }
};