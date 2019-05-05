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
    const points = firestore.collection('cards').doc();
    const ref = firestore.collection('cards').doc();

    const authorCompany = getState().firebase.profile.company;
    const calRef = firestore.collection('events').doc()
    calRef.set({
      title: task.title,
      id: calRef.id,
      authorId: authorId,
      createdAt: new Date(),
      end: task.dueDate,
      start: task.dueDate,
      authorCompany: authorCompany
    })

    ref.set({
      ...task,
      id: ref.id,
      authorId: authorId,
      createdAt: new Date(),
      points: points,
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