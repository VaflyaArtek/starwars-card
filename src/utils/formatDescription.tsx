import {PersonData, PlanetData, StarshipData} from "../types/types.ts";
import React from "react";

export const formatDescription = (data: PersonData): React.ReactNode => (
    <>
        <span style={{color: 'gainsboro'}}>{data.name}</span> whose year of birth is believed to be
        <span style={{color: 'red'}}> {data.birth_year} </span> is
        <span style={{color: 'purple'}}> {data.height}</span> cm tall and weighs
        <span style={{color: 'gold'}}> {data.mass} </span>kg
    </>
);

export const formatPlanet = (data: PlanetData): React.ReactNode => (
    <span>
        <span style={{color: 'gainsboro'}}>{data.name}</span> has a population of
        <span style={{color: 'red'}}> {data.population} </span>, a rotation period of
        <span style={{color: 'purple'}}> {data.rotation_period}</span>, and a climate of
        <span style={{color: 'gold'}}> {data.climate}</span>
    </span>
);

export const formatStarship = (data: StarshipData): React.ReactNode => (
    <span>
        <span style={{color: 'gainsboro'}}>{data.name}</span> is a
        <span style={{color: 'red'}}> {data.model} </span> model with
        <span style={{color: 'purple'}}> {data.passengers}</span> passengers and costs
        <span style={{color: 'gold'}}> {data.cost_in_credits}</span> credits
    </span>
);