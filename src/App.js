import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAth2XcnehKF_f8OXERX_0RM7d_FgmKA6I',
			authDomain: 'authentication-7d99e.firebaseapp.com',
			databaseURL: 'https://authentication-7d99e.firebaseio.com',
			projectId: 'authentication-7d99e',
			storageBucket: 'authentication-7d99e.appspot.com',
			messagingSenderId: '131904684065',
			appId: '1:131904684065:web:0117901d7d0c1bf2'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
						<Card>
							<CardSection>
								<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
							</CardSection>
						</Card>
						);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
			);
	}
}

export default App;
