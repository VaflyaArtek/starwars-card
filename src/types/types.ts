export type PersonData = {
    name: string
    birth_year: string
    height: string
    mass: string
}

export type PlanetData = {
    name: string
    population: string
    rotation_period: string
    climate: string
}

export type StarshipData = {
    name: string
    model: string
    passengers: string
    cost_in_credits: string
}

export type entity = 'people' | 'planets' | 'starships';
