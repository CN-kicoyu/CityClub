import React, { Component, PropTypes } from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TopTabNavBar extends Component {

    static PropTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tab页集合
        tabNames: React.PropTypes.array, // 保存Tab名称
    }

    renderTabOption(tab, i) {
        const color = this.props.activeTab == i ? "#4690ff" : "#000000"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity key={i} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                <View style={styles.tabItem}>
                    <Text style={{ color: color, paddingHorizontal: 8, fontSize: 16 }}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }


    render() {
        return (
            <View style={styles.tabs}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                >
                    {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
                </ScrollView>
                <Icon name="md-add" size={22} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        paddingRight: 10
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingLeft: 8
    }
});


