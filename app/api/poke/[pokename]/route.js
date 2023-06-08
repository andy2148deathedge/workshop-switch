import { dbPokeDataList } from "@models/mockPokeData.js";

export const GET = async (request, { params }) => {
  try {
    const pokeData = await dbPokeDataList.find(poke => poke.name === params.pokename);

    return new Response(JSON.stringify(pokeData), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failes to fetch poke data.", {
      status: 500,
    });
  }
};
