// export const myMutation = ( state ) => {
// return state....
// }


 export const setCharacters = ( state, characters ) =>
 {
  state.characters = [...state.characters, ...characters ]
  console.log(state.characters);
  state.isLoading = false;
 }

export const updateEntry = (/* state */ ) => {

}

export const createEntry = (/* state */ ) => {

}