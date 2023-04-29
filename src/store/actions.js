import rickAndMortyAPI from "@/api/rickAndMortyAPI";

export const loadCharacters = async (/*state*/) => {
    const { data } = await rickAndMortyAPI.get("/getCharacters")
    console.log(data);
}