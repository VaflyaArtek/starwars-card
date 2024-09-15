import axios from 'axios'
import {entity, PersonData, PlanetData, StarshipData} from "../types/types.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getEntityData(id: number, entity: entity) {
    try {
        const result = await axios.get(`${BASE_URL}/${entity}/${id}`);
        return formatData(result.data, entity);
    } catch (e) {
        console.error(e);
        return 'invalid data';
    }
}

function formatData(data: PersonData | PlanetData | StarshipData, entity: entity) {
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
        birth_year: data.birth_year,
        mass: data.mass,
    };
}

function formatPlanetData(data: PlanetData) {
    return {
        name: data.name,
        population: data.population,
        rotation_period: data.rotation_period,
        climate: data.climate,
    };
}

function formatStarshipData(data: StarshipData) {
    return {
        name: data.name,
        model: data.model,
        passengers: data.passengers,
        cost_in_credits: data.cost_in_credits,
    };
}

