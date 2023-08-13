import { Component } from 'react';

class CardLists extends Component {
    render() {
        const { img, title, description, region, capital } = this.props;
        return (
            <article className="card">
                <img className="Image" src={img} alt={title} />
                <div className="cardPadding">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{region}</p>
                    <p>{capital}</p>
                </div>
            </article>
        );
    }
}

export default CardLists;
