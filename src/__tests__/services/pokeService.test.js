import { getPokemonData } from "../../services";
import { mockPokemonData } from "../../mock/pokeData";

it("Should get pokemon data with same object structure", async () => {
  const data = await getPokemonData();
  expect(data).toMatchObject(mockPokemonData);
});
