import React from "react";

import {randomSample} from "../utils";
import {CardConfig} from "../interfaces";
import MECHANICS from "../../data/mechanics.json";
import FLAVORS from "../../data/flavors.json";

const WEIGHTS = new Map<string, number>();
WEIGHTS.set("uncommon",5);
WEIGHTS.set("rare",3);
WEIGHTS.set("mythic", 1);


interface CardsProp {
    cards: CardConfig[];
    children?: JSX.Element|JSX.Element[];
}


function FetchCards(cardList: CardConfig[]): CardConfig[] {
    const commons = cardList.filter(c => c.rarity === "common");
    const others = cardList.filter(c => c.rarity !== "common");
    const otherWeights = others.map(c => WEIGHTS.get(c.rarity) ?? 0);
    const res = [
        ...randomSample(commons,[], 2),
        ...randomSample(others, otherWeights, 1)
    ];
    return res
}

const Card: React.FC<CardConfig> = ({name, rarity}: CardConfig) => {
    return <span>
    <img
        src={require(`../images/${name}-front.png`)}
        alt={name}
        width={200}>
    
    </img>
    <p>{name+' '+rarity}</p>
    </span>
}

const Page: React.FC<CardsProp> = ({cards}: CardsProp) => {
    return <div>
        <>
        <h1>Generate Page</h1>
        {cards.map((c) => {
            return <Card name={c.name} rarity={c.rarity} key={c.name}/>
        })}
        </>
    </div>
}


export default function GeneratePage() {
    const mechs: CardConfig[] = FetchCards(MECHANICS);
    const flavs: CardConfig[] = FetchCards(FLAVORS);
    // return <Page props={{mechanics: mechs, flavors: flavs}}/>;
    return <div>
        <Page cards={mechs}/>
        <Page cards={flavs}/>
    </div>
}