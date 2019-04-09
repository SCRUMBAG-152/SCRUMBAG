export const updateUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('users')
      .doc(user.id)
      .update({
        ...user
      })
      .then(() => {
        dispatch({ type: 'UPDATE_USER' });
      }).catch((err) => {
          dispatch({type: 'UPDATE_USER_ERROR', err});
      })
    }
  };