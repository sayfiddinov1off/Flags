import { Component } from 'react';
import '../CardList/CardList.css';

import Img1 from '../img/Germany.png';
import Img2 from '../img/unitedStates.png';
import Img3 from '../img/brazil.png';
import Img4 from '../img/iceland.png';
import Img5 from '../img/afganistan.png';
import Img6 from '../img/alandIslands.png';
import Img7 from '../img/albania.png';
import Img8 from '../img/algeria.png';
import CardLists from '../CardLists/CardLists';
// import Img from ""

const UserData = [
    {
        img: Img1,
        title: 'Germany',
        description: 'Population: 81,770,900',
        region: 'Region: Europe',
        capital: 'Capital: Berlin',
    },
    {
        img: Img2,
        title: 'United States of America',
        description: 'Population: 323,947,000',
        region: 'Region: Americas',
        capital: 'Capital: Washington, D.C.',
    },
    {
        img: Img3,
        title: 'Brazil',
        description: 'Population: 206,135,893',
        region: 'Region: Americas',
        capital: 'Capital: Brasília',
    },
    {
        img: Img4,
        title: 'Iceland',
        description: 'Population: 334,300',
        region: 'Region: Europe',
        capital: 'Capital: Reykjavík',
    },
    {
        img: Img5,
        title: 'Bootstrap',
        description: 'Population: 27,657,145',
        region: 'Region: Asia',
        capital: 'Capital: Kabul',
    },
    {
        img: Img6,
        title: 'React',
        description: 'Population: 28,875',
        region: 'Region: Europe',
        capital: 'Capital: Mariehamn',
    },
    {
        img: Img7,
        title: 'React',
        description: 'Population: 2,886,026',
        region: 'Region: Europe',
        capital: 'Capital: Tirana',
    },
    {
        img: Img8,
        title: 'React',
        description: 'Population: 40,400,000',
        region: 'Region: Africa',
        capital: 'Capital: Algiers',
    },
];

class CardList extends Component {
    render() {
        const cardList = UserData.map((item) => {
            const { img, title, description, region, capital } = item;
            return (
                <CardLists
                    img={img}
                    title={title}
                    description={description}
                    region={region}
                    capital={capital}
                />
            );
        });

        return <section className="cardLists container">{cardList}</section>;
    }
}

export default CardList;
