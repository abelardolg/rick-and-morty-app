// export const myAction = async ({ commit }) => {
//
// }

import rickAndMortyAPI from "@/api/rickAndMortyAPI";


const GET_CHARACTERS = "/getCharacters";
const GET_FILTERED_CHARACTERS = "/getFilteredCharacters";

export const loadCharacters = async ({ commit }) => {
    commit("isLoading");
    const { data } = await rickAndMortyAPI.get(GET_CHARACTERS);
    commit("setCharacters", data.data)
    commit("isLoaded");
}

export const getFilteredCharacters =  async ({ commit }, filters) => {
    commit("isLoading");
    const {name, status} = filters;
    const payload = {filter: {} };

    if (0 < name.length) {
        payload.filter = {name: name};
    }
    if (0 < status.length) {
        payload.filter = { ...payload.filter, status: status.toLowerCase() };
    }

    const payloadJsonStringified = JSON.stringify(payload);
    const customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const { data } = await rickAndMortyAPI.post(
        GET_FILTERED_CHARACTERS, payloadJsonStringified, customConfig
    );
    commit("setCharacters", data.data)
    commit("isLoaded");
}
