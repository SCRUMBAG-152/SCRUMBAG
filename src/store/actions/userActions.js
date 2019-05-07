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

  export const createComment= (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;
      const ref = firestore.collection('comments').doc();
      ref.set({
        authorId: authorId,
        ...comment,
        id: ref.id,
        createdAt: new Date(),
      }).then(() => {
        dispatch({ type: 'CREATE_COMMENT', comment });
      }).catch((err) => {
        dispatch({ type: 'CREATE_COMMENT_ERROR', err });
      })
    }
  };