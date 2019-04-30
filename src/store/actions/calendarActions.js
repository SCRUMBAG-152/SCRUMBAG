import { events } from "../../customs/variables/general";

export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;
      const ref = firestore.collection('events').doc()
      ref.set({
          ...event,
          id: ref.id,
          authorId: authorId,
          createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_EVENT', event });
      }).catch((err) => {
          dispatch({type: 'CREATE_EVENT_ERROR', err});
      })
    }
  };