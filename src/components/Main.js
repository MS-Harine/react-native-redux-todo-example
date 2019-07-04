import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import { View } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class Main extends Component {
  render() {
    const { dispatch, visibilityFilter, visibleTodos } = this.props;
    return (
      <View style={{marginTop: 22}}>
        <AddTodo 
          onAddClick={text => dispatch(addTodo(text))} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))} />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => {dispatch(completeTodo(index))}} />
      </View>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(Main);