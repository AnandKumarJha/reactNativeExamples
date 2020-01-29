import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component {

    state = {
        students: [
            {
                "id": 1,
                "name": "anand 1"
            },
            {
                "id": 2,
                "name": "anand 2"
            },
            {
                "id": 3,
                "name": "anand 3"
            }
        ]
    }

    removeItem = (item, index) => {
        var myArray = [...this.state.students];
        myArray.splice(index, 1);
        this.setState({students: myArray});
        // alert(item.name+" deleted.");
    }
    
    addItem = () => {
        let indexToBeAppended = this.state.students.length+1;
        let dataToBeAppended = {
            id : indexToBeAppended,
            name : "anand "+indexToBeAppended,
        }
        
        var myArray = [...this.state.students];
        myArray.splice(indexToBeAppended, 0, dataToBeAppended);
        this.setState({students: myArray});
        // alert(dataToBeAppended.name+" Inserted.");
    }

    render() {
        return (<View>
            {
                this.state.students.map((item, index) => (
                    <TouchableOpacity onPress={()=>this.removeItem(item, index)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
            <Text onPress={()=>this.addItem()}>Insert Data</Text>
            <Text onPress={()=>this.props.navigation.navigate('Login',{"toShowSplash":true})}>Go To Next Activity</Text>
        </View>);
    }
}