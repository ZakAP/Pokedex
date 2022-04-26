import { PokemonMove } from './../models/PokemonMove';
import { PokemonForm } from "models/PokemonForm";
import { PokemonDetails } from "models/PokemonDetails"
import { PokemonSpecies } from "models/PokemonSpecies"
import { PokemonCompleteInfo } from "models/PokemonCompleteInfo";
import axios, { AxiosResponse } from "axios";

interface GetPokemonResponse {
  results: Array<{name: string; url: string }>;
}

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {},
});

export const getPokemonForm = (id: number) => {
  return pokeApi.get<PokemonForm>(`pokemon-form/${id}`);
};

export const getPokemons = (limit: number, offset: number) => {
  return pokeApi.get<GetPokemonResponse>(
    `pokemon?limit=${limit}&offset=${offset}`
  );
};

export const getAllPokemonForms = async (limit: number, offset: number) => {
  const result = await getPokemons(limit, offset);

  const response = await Promise.all(
    result.data.results.map((_, index) => {
      return getPokemonForm(index + offset + 1);
    })
  );

  return response.map((res) => res.data);
};

export const getPokemonDetails = async (pokemon?: string) => {
  const pokemonDetails = (await pokeApi.get<PokemonDetails>(`pokemon/${pokemon}`)).data
  const  pokemonSpecies = (await pokeApi.get<PokemonSpecies>(`pokemon-species/${pokemonDetails.id}`)).data

  const pokemonCompleteInfo : PokemonCompleteInfo = {
    pokemonDetails,
    pokemonSpecies
  }

  return pokemonCompleteInfo
}

export const getPokemonMove = async (moveUrl: string) => {
  const detailedMove = (await axios.get<PokemonMove>(moveUrl)).data

  return detailedMove
}

export const getPokemonFormsWithName = async(name: string) => {
  const {data: {results: pokemonList}} = await getPokemons(898, 0)
  const promiseList = pokemonList.reduce<Array<Promise<AxiosResponse<PokemonForm, any>>>>((acc, pokemon, index)=>{
    if(pokemon.name.includes(name)){
      acc.push(getPokemonForm(index + 1))
    }
    return acc
  }, [])

  const response = await Promise.all(promiseList)

  return response.map((res) => res.data)
}
