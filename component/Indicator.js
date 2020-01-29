import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class Indicator extends React.Component {
    render() {
        if (!this.props.indicatorToShow) {
            return <View style={{ width: 34, height: 34 }}></View>;
        }
        return (
            <View>
                <ActivityIndicator size="large" color="blue"></ActivityIndicator>
            </View>
        );
    }
}