
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TopTabNavBar from './TopTabNavBar';
import Title from '../../components/Title';
import Recommend from './Recommend';

import px2dp from '../../utils/px2dp';

export default class Home extends Component {
	static navigationOptions = {
		headerTitle: (
			<TouchableOpacity style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
				<Text style={{color: '#fff',fontSize:px2dp(32),marginLeft:px2dp(260)}}>北京</Text>
				<Image source={require('../../assets/images/Arrow.png')}  style={{alignSelf: 'center',width:px2dp(26),height:px2dp(14),marginLeft:px2dp(5)}}/>
			</TouchableOpacity>
		),
		headerRight: (
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}}>
				<Image source={require('../../assets/images/icon_search.png')}  style={{width:px2dp(41),height:px2dp(35),marginRight:px2dp(41)}}/>
				<Image source={require('../../assets/images/message.png')}  style={{width:px2dp(40),height:px2dp(35),marginRight:px2dp(30)}}/>
			</TouchableOpacity>
        ),
		headerLeft: (
			// <Text style={{color: '#fff',fontSize:px2dp(42),marginLeft:px2dp(30),flexDirection: 'row',alignItems: 'center'}}>信息港</Text>
			<Image source={require('../../assets/images/home_logo.png')} style={{marginLeft:px2dp(30),flexDirection: 'row',alignItems: 'center', width:px2dp(110), height: px2dp(38)}} />			
        ),
		headerStyle: {
			backgroundColor: '#4f95ff'
			
		}  
	}
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />,
				<Recommend />
			],
			tabNames: ['推荐', '精品', '美食', '旅游', '时尚', '招聘', '医疗']
		};
	}

	render() {
		let tabNames = this.state.tabNames;
		return (
			<View style={styles.main}>
				<View style={styles.main}>
					<ScrollableTabView
						automaticallyAdjustContentInsets={false}
						contentContainerStyle={{ flexGrow: 1, flex: 1 }}
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
	tabNav: {
		flexDirection: 'row',
		alignItems: 'center',
		color: 'white'
	},
	main: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex: 1
	},
	headLeft: {
		color: '#fff',
		fontSize:px2dp(42),
		marginLeft:px2dp(30),
		flexDirection: 'row',
		alignItems: 'center'
	}
});