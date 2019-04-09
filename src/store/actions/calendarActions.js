export const event = (newEvent) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

    return firestore.collection('events').doc().set({

        eventitle: newEvent.eventtitle,

      });
    }

}