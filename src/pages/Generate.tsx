import {randomSample} from "../utils";
import MECHANICS from "../../data/mechanics.json";
import FLAVORS from "../../data/flavors.json";

const WEIGHTS = {
    "uncommon":  5,
    "rare": 3,
    "mythic": 1
}

interface CardConfig {
    name: string,
    rarity: string
}



// let MECHANICS: CardConfig[] = JSON.parse(require("../../data/mechanics.json"));
// let FLAVORS: CardConfig[] = JSON.parse(require("../../data/flavors.json"));

function Card(cardName: string) {
    const filePath = "../../images/"+cardName+".png";

    return <div>
        <img src={filePath} alt={cardName}></img>
        <p>{cardName}</p>
    </div>
}

function FetchCards(cardList: CardConfig[]): string[] {
    const commonNames = cardList.filter(c => c.rarity === "common").map(c => c.name);
    
    const otherNames = cardList.filter(c => c.rarity !== "common").map(c => c.name);
    return []
}

function Page(mechanics: CardConfig[], flavors: CardConfig[]){   
    return <div>
        <h1>Generate Page</h1>
    </div>
}

export default function GeneratePage(){
    const mechs: CardConfig[] = [];
    const flavs: CardConfig[] = [];
    return <Page props={{mechanics: mechs, flavors: flavs}}/>;
    // return <Page mechanics={MECHANICS} flavors={FLAVORS}/>
}