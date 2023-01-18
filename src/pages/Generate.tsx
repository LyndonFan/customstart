import React, {Component, PropsWithChildren} from "react";

import {randomSample} from "../utils";
import CardConfig from "../interfaces";
import MECHANICS from "../../data/mechanics.json";
import FLAVORS from "../../data/flavors.json";

const WEIGHTS = {
    "uncommon":  5,
    "rare": 3,
    "mythic": 1
}

interface CardsProp {
    cards: CardConfig[];
    children?: JSX.Element|JSX.Element[];
}

// let MECHANICS: CardConfig[] = JSON.parse(require("../../data/mechanics.json"));
// let FLAVORS: CardConfig[] = JSON.parse(require("../../data/flavors.json"));
// console.log(MECHANICS)
// console.log(FLAVORS)

function FetchCards(cardList: CardConfig[]): string[] {
    const commonNames = cardList.filter(c => c.rarity === "common").map(c => c.name);
    
    const otherNames = cardList.filter(c => c.rarity !== "common").map(c => c.name);
    return []
}

const Card: React.FC<CardConfig> = ({name, rarity}: CardConfig) => {
    return <img
        src={require(`../images/${name}-front.png`)}
        alt={name}
        width={200}>
    </img>
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
    const mechs: CardConfig[] = [];
    const flavs: CardConfig[] = [];
    // return <Page props={{mechanics: mechs, flavors: flavs}}/>;
    return <div>
        <Page cards={MECHANICS}/>
        <Page cards={FLAVORS}/>
    </div>
}