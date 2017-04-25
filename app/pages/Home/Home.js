
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TopTabNavBar from './TopTabNavBar';
import Title from '../../components/Title';
import Recommend from './Recommend';

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabs:[
        		<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />
			],
            tabNames: ['推荐', '精品', '美食', '旅游','时尚','招聘','医疗']
		};
	}

	render() {
		let tabNames = this.state.tabNames;
		return (
			<View style={styles.main}>
				<Title />
				<View style={styles.main}>
					<ScrollableTabView
					automaticallyAdjustContentInsets={false}
					contentContainerStyle={{flexGrow: 1,flex:1}}
						renderTabBar={() => <TopTabNavBar tabNames={tabNames} />}>
						{
							this.state.tabs.map(function (tab, i) {
								return <View key={i}>{tab}</View>
							})
						}
					</ScrollableTabView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex:1
	}
});