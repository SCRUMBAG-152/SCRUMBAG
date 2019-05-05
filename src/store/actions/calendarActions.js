
export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const authorId = getState().firebase.auth.uid;
      const authorCompany = getState().firebase.profile.company;
      const ref = firestore.collection('events').doc()
      ref.set({
        title: event.title,
        id: ref.id,
        authorId: authorId,
        createdAt: new Date(),
        end: event.dueDate,
        start: event.dueDate,
        authorCompany: authorCompany
      }).then(() => {
        dispatch({ type: 'CREATE_EVENT', event });
      }).catch((err) => {
          dispatch({type: 'CREATE_EVENT_ERROR', err});
      })
    }
  };

  /* export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const authorCompany = getState().firebase.profile.company;
      firestore.collection('events').add({
          ...event
      }).then(() => {
        dispatch({ type: 'CREATE_EVENT', event });
      }).catch((err) => {
          dispatch({type: 'CREATE_EVENT_ERROR', err});
      })
    }
  }; */