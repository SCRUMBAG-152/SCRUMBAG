export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorCompany = getState().firebase.profile.company;
      firestore.collection('projects').add({
          ...project,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorCompany: authorCompany,
          authorId: authorId,
          createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      }).catch((err) => {
          dispatch({type: 'CREATE_PROJECT_ERROR', err});
      })
    }
  };

  export const createColumn = (column) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const ref = firestore.collection('columns').doc()
      console.log(ref)
      ref.set({
          ...column,
          id: ref.id,
      }).then(() => {
        dispatch({ type: 'CREATE_COLUMN', column});
      }).catch((err) => {
          dispatch({type: 'CREATE_COLUMN_ERROR', err});
      })
  }
}

export const deleteColumn = (columnID) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection('columns')
    .doc(columnID)
    .delete()
    .then(() => {
      dispatch({ type: 'DELETE_COLUMN' });
    }).catch((err) => {
        dispatch({type: 'DELETE_COLUMN_ERROR', err});
    })
  }
};
  