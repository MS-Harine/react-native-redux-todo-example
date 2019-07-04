import React, { Component } from 'react';
import Todo from './Todo';
import { FlatList } from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => 
          <Todo {...item}
                onClick={() => {this.props.onTodoClick(index)}} />}
      />
    );
  }
}