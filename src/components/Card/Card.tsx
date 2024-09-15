/// <reference types="vite-plugin-svgr/client" />
import React, {useEffect, useState, Dispatch, SetStateAction, useCallback} from "react";
import styles from './styles/Card.module.css';
import PrevIcon from '../../assets/images/prev.svg?react';
import NextIcon from '../../assets/images/next.svg?react';
import { getEntityData } from "../../services/apiService.ts";
import dataHandler from "../../utils/dataHandlers.ts";
import Button from "./Button";
import CardImg from "./CardImg";
import { entity, PersonData, PlanetData, StarshipData } from "../../types/types.ts";

interface CardProps {
    title: entity;
    id: number;
    setId: Dispatch<SetStateAction<number>>;
}

const Card: React.FC<CardProps> = ({ title, id, setId }) => {
    const [data, setData] = useState<PersonData | PlanetData | StarshipData | string | null>(null);
    const [paragraph, setParagraph] = useState<React.ReactNode | string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await getEntityData(id, title);
                setData(result === 'invalid data' ? 'invalid data' : result);
            } catch (error) {
                console.error(error);
                setData('invalid data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, title]);

    useEffect(() => {
        if (data && data !== 'invalid data') {
            setParagraph(dataHandler(data, title));
        }
    }, [data, title]);

    const handlePrevClick = useCallback(() => id > 1 && setId(prevId => prevId - 1), [id, setId]);
    const handleNextClick = useCallback(() => setId(prevId => prevId + 1), [setId]);


    const renderContent = () => {
        if (loading) {
            return <p className='loading'>Loading</p>;
        }

        if (data === 'invalid data') {
            return <h3 className={styles.description}>invalid data</h3>;
        }

        return (
            <>
                <h3 className={styles.title}>{(data as PersonData | PlanetData | StarshipData)?.name}</h3>
                <p className={styles.description}>{paragraph}</p>
            </>
        );
    };

    return (
        <section className={styles.Card}>
            <div className={styles.wrapper}>
                <CardImg entity={title} id={id}/>
                {renderContent()}
                <hr/>
                <div className={styles.btnWrapper}>
                    <Button handleClick={handlePrevClick} id={id}>
                        <PrevIcon width={15} height={15}/>
                    </Button>
                    <Button handleClick={handleNextClick}>
                        <NextIcon width={15} height={15}/>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Card;
