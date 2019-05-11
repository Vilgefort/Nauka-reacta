import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
	render() {
		return (
			<main className={styles.component}>
				<h1 className={styles.title}>My first React app</h1>
				<h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
				<List
					title={['Things to do in space ', <sup key="1">soon!</sup>]}
					image={'https://i.postimg.cc/7YLXTY4x/space.png'}
				>
					<p>Intresting things I want to ckeck out!</p>
				</List>
			</main>
		);
	}
}

export default App;
