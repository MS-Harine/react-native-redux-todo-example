import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { text: "" }
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder="Eg. Create New Video"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text} />
                <Button
                    title="Add" 
                    onPress={(e) => this.handleClick(e)} />
            </View>
        )
    }

    handleClick(e) {
        const text = this.state.text.trim();
        this.props.onAddClick(text);
        this.setState({text: ""});
    }
}