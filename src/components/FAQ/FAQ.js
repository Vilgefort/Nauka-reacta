import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import {faq} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} image={faq.image}/>
    <p>{faq.text}</p>
  </Container>
);

export default FAQ;