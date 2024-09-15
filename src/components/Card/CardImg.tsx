import React from "react";
import styles from './styles/Img.module.css';
import {entity} from "../../types/types.ts";

export interface CardImgProps {
    entity: entity;
    id: number;
}

function CardImg({entity, id}: CardImgProps): React.ReactNode {
    const imageUrls = {
        people: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
        planets: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        starships: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
    };
    const placeholderImageUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = placeholderImageUrl;
    };
    const imageUrl = imageUrls[entity] || placeholderImageUrl;

    return (
        <div>
            <img className={styles.image} src={imageUrl} alt="" onError={handleError} />
        </div>
    );
}

export default CardImg