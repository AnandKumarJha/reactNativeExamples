import React from 'react';
import { View, Text } from 'react-native';
import ACTION_UPDATE from '../action/action'
import { connect } from 'react-redux';

class reduxExample extends React.Component {

    constructor(props) {
        super(props);
    }

    increment = () => {
        const { updateCount } = this.props;
        updateCount(this.props.childCount.count + 1);
    }

    decrement = () => {
        const { updateCount } = this.props;
        updateCount(this.props.childCount.count - 1);
    }

    render() {
        return (
            <View>
                <Text onPress={() => this.increment()}>Increment</Text>
                {<Text>{this.props.childCount.count}</Text>}
                <Text onPress={() => this.decrement()}>Decrement</Text>

                <Text onPress={()=>this.props.navigation.navigate('reduxExample2')}>Go to Second Reducer</Text>
            </View>);
    }
}

const mapStateToProps = (state) => {
    return {
        childCount: state
    }
}

const matchDispatchToProp = (dispatch) => {
    return {
        updateCount: (childCount) => dispatch({
            type: ACTION_UPDATE,
            payload: childCount
        })
    }
}

export default connect(mapStateToProps, matchDispatchToProp)(reduxExample)