// export const myAction = async ({ commit }) => {
//
// }

import rickAndMortyAPI from "@/api/rickAndMortyAPI";

export const loadCharacters = async ({ commit }) => {
    console.log("loadCharacters");
    const { data } = await rickAndMortyAPI.get("/getCharacters");
    console.log(data.data);
    commit("setCharacters", data.data)
}
