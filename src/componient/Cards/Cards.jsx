import { Component } from 'react';
import './Cards.css';
import CardList from '../CardList/CardList';
class Cards extends Component {
    render() {
        return (
            <>
            
                <div className="posts">
                
                        <CardList />
                    
                </div>
            </>
        );
    }
}

export default Cards;
