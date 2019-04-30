const initState = {
}

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
      case 'CREATE_EVENT':
          console.log('create event', action.event);
          return state;

      case 'CREATE_EVENT_ERROR':
          console.log('create event error', action.err);
          break
      default:
          return state;
  }
}

export default calendarReducer;