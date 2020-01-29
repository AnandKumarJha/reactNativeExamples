import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProfilePic extends React.Component {
    render() {
        if (!this.props.fileUri) {
            return (
                <TouchableOpacity onPress={() => this.props.chooseFileForChild()}>
                    <View style={styles.photo_select}>
                        <Text>Choose Your</Text>
                        <Text>avtar</Text>
                    </View>
                </TouchableOpacity>);
        }
        return (
            <TouchableOpacity onPress={() => this.props.chooseFileForChild()}>
                <View>
                    <Image style={styles.photo_select}
                        source={{ uri: 'data:image/jpeg;base64,' + this.props.fileUri }} />
                </View>
            </TouchableOpacity >);
    }
}

const styles = StyleSheet.create({
    photo_select: {
        width: 140,
        height: 140,
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70,
        borderStyle: 'dashed'
    },
    profile: {
        width: 140,
        height: 140
    }
});