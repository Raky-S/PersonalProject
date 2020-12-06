import React, { useState, useEffect } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUpperCase } from "./constants";
import axios from "axios"

const Pokemon = props => {
    const {history, match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined)

useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(function (response) {
        const { data } = response;
        setPokemon(data);
    })
    .catch(function (error) {
setPokemon(false)
    });
}, [pokemonId]);

    const generatePokemeonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;
        return (
            <>
                <Typography variant="h1">
                    {`${id}.`} {toFirstCharUpperCase(name)}
                    <img src={front_default} atl="" />
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
                <Typography variant="h3">Informations Pokemon  </Typography>
                <Typography>
                    {"species: "}
                    <Link href={species.url}>{species.name}</Link>
                </Typography>
                <Typography >Poids: {weight} </Typography>
                <Typography >Taille: {height} </Typography>
                <Typography variant="h6">Types: </Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name}>{`${name}`}</Typography>

                })}
            </>
        );
    };
    return (
        <> {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemeonJSX()}
            {pokemon === false && <Typography> Pokémon Inconnu</Typography>}
            <Button variant="contained" onClick={() => history.push("/")}>Retourner à la Pokedex
            </Button>
        </>
    );
};

export default Pokemon;
