export const updateRole = (newRole) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log(newRole)
        const firestore = getFirestore();
        firestore.collection('users')
            .doc(newRole.id)
            .update({
                role: newRole.role
            }).then(() => {
                dispatch({ type: 'UPDATE_ROLE', newRole });
            }).catch((err) => {
                dispatch({ type: 'UPDATE_ROLE_ERROR', err });
            })
    }
};


