import React, { useEffect, useState } from "react";
import { getPokemonData } from "../services";
import { Title } from "./Title";
import { Image } from "./Image";
import { Link } from "./Link";

export const PokerCard = () => {
  const [pokeName, setPokeName] = useState("");
  const [spriteLinks, setSpriteLinks] = useState([]);
  const [pokeVideo, setPokeVideo] = useState("");

  useEffect(() => {
    const getPokemonHandler = async () => {
      const {
        name,
        sprites: { front_default, front_shiny },
        video
      } = await getPokemonData();
      setPokeName(name);
      setSpriteLinks([front_default, front_shiny]);
      setPokeVideo(video);
    };

    getPokemonHandler();
  }, []);

  return (
    <>
      <Title text={pokeName} />
      {spriteLinks.map((link, i) => (
        <Image key={`${link}${i}`} source={link} title={`pokemon img ${i}`} />
      ))}
      <br />
      <Link source={pokeVideo} title="Watch this pokemon in action" newTab />
    </>
  );
};
