import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  };
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3>{ReactHtmlParser(title)}</h3>
      </section>
    );
  }
}

export default Card;
