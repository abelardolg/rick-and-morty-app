// export const myMutation = ( state ) => {
// return state....
// }


 export const setCharacters = ( state, characters ) =>
 {
  state.characters = [...characters ]
 }

export const setFilters = ( state, payload) =>
{
 const { name, status } = payload;
 state.name = name;
 state.status = status;
}

export const isLoading = (state) => {
 state.isLoading = true;
}

export const isLoaded = (state) => {
 state.isLoading = false;
}
