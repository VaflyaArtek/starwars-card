import axios from 'axios'
import {PersonData, PlanetData, StarshipData} from "../types/swDataHandler-types.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getData(id: number, entity: string) {
    try {
        const result = await axios.get(`${BASE_URL}/${entity}/${id}`);
        const formattedData = formatData(result.data, entity);
        console.log(formattedData);
        return formattedData;
    } catch (e) {
        console.error(e);
        return null;
    }
}

function formatData(data: PersonData | PlanetData | StarshipData, entity: string) {
    switch (entity) {
        case 'people':
            return formatPersonData(data as PersonData);
        case 'planets':
            return formatPlanetData(data as PlanetData);
        case 'starships':
            return formatStarshipData(data as StarshipData);
        default:
            return null;
    }
}

function formatPersonData(data: PersonData) {
    return {
        name: data.name,
        height: data.height,
        birthYear: data.birth_year,
        mass: data.mass,
    };
}

function formatPlanetData(data: PlanetData) {
    return {
        name: data.name,
        population: data.population,
        rotationPeriod: data.rotation_period,
        climate: data.climate,
    };
}

function formatStarshipData(data: StarshipData) {
    return {
        name: data.name,
        model: data.model,
        passengers: data.passengers,
        costInCredits: data.cost_in_credits,
    };
}