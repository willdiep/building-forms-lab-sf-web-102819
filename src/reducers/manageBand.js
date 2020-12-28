export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    case 'ADD_BAND':
      console.log('reducer received this action:', action)
      // return {
      //   bands: state.bands.concat(action.payload.name)
      // }
      // return {
      //   ...state,
      //   bands: [...state.bands, action.payload.name]
      // }

      return { ...state, bands: [...state.bands, action.payload] }


    
  default:
    return state
  }
};
