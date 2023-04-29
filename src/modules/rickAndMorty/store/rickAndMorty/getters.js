// export const myGetter = ( state ) => {
// return state....
// }

export const getCharactersByTerm = ( state ) => ( term = "" ) => {
    if (term.length === 0 ) return state.characters;
        console.log(state.characters);
    // const termLowerCase = term.toLowerCase();
    // return state.characters.filter( character => character.name.toLowerCase().includes(termLowerCase) );
    return state.characters;
}

export const getEntryById = ( state ) => (id = "") => {

    const entry = state.entries.find( entry => entry.id === id );
    console.log(entry);
    if (!entry) return;



    return {...entry};
}