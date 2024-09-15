import {entity, PersonData, PlanetData, StarshipData} from "../types/types.ts";
import {formatDescription, formatPlanet, formatStarship} from "./formatDescription.tsx";

export default function dataHandler(data: PersonData | PlanetData | StarshipData | string, type: entity) {
    switch (type) {
        case 'people':
            if (isPersonData(data)) {
                return formatDescription(data);
            }
            break;
        case 'planets':
            if (isPlanetData(data)) {
                return formatPlanet(data);
            }
            break;
        case 'starships':
            if (isStarshipData(data)) {
                return formatStarship(data);
            }
            break;
        default:
            throw new Error("Unknown entity type");
    }
    return "Invalid data";
}

function isPersonData(data: unknown): data is PersonData {
    return typeof data === 'object' && data !== null &&
        'birth_year' in data &&
        'height' in data &&
        'mass' in data &&
        'name' in data;
}

function isPlanetData(data: unknown): data is PlanetData {
    return typeof data === 'object' && data !== null &&
        'population' in data &&
        'rotation_period' in data &&
        'climate' in data &&
        'name' in data;
}

function isStarshipData(data: unknown): data is StarshipData {
    return typeof data === 'object' && data !== null &&
        'model' in data &&
        'passengers' in data &&
        'cost_in_credits' in data &&
        'name' in data;
}
