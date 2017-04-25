import React, { Component } from 'react'
import { View, StyleSheet, Text, Navigator } from 'react-native'
import MainPages from './MainPages'

export default class App extends Component {

    render() {
        return (
            <Navigator
                initialRoute = {{component: MainPages}}
                renderScene = {(route, navigator) => {
                    return <route.component navigator = {navigator} {...route.args} />
             }}/>
        )
    }
}



