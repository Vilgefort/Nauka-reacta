/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { Link } from 'react-router-dom';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {
    static propTypes = {
        cards: PropTypes.array,
        listId: PropTypes.node,
    };
    render() {
        const { cards } = this.props;
        return (
            <Container>
                <section >
                    <div className={styles.component}>
                        {cards.map(cardData => {
                            return (
                                <Link className={styles.links} key={cardData.id} to={`/list/${cardData.listId}`}>
                                    <Card key={cardData.id} {...cardData}>
                                    </Card></Link>
                            );
                        })}

                    </div>
                </section>
            </Container>
        );
    }
}

export default SearchResults;