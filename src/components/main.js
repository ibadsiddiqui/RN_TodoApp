import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

// importing addtodo and deletetodo from actions
import {addTodo, deleteTodo} from '../actions'

// todo list implementation
let TodoItem =connect(mapStateToProps)(React.createClass({     //TodoItem component should be mapped from state to props to use delete function

    //delete content of todo
    deleteSelf(){
        return  //dispatch todolist id for delete
    },
    render() {                                          // Render UI
        return (
            <TouchableOpacity onPress={() => this.props.dispatch(deleteTodo(this.props.id))}>
                <View style={styles.todoContainer}>
                    <Text style={styles.todoText}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}))



class MainApp extends Component{

    state = {
        newTodoText: "",        //start state of the MainApp
    }

    addNewTodo(){
        const {newTodoText} = this.state;                     // new variable newTodoText to state value
        if(newTodoText && newTodoText != ""){
            this.setState({
                newTodoText: ""                             // set the new state of todotext
            });
            this.props.dispatch(addTodo(newTodoText));      //Dispatch the text for adding to list
        }
    }


    renderTodos(){                           //render the todolist
        return this.props.todos.map((todo)=>{           //map todos value to above component created TodoItem with 
            return (                                    // Text, and Id of it using UUID from npm package
                <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
            )
        });
    }

    render() {
        return (                                            //return the official UI of the MainApp
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>       
                <View style={styles.topBar}>
                    <Text style={styles.title}>
                        To-Do List 
                    </Text>
                </View>

                <View style={styles.inputContainer}>

                    <TextInput  onSubmitEditing={this.addNewTodo.bind(this)} 
                                onChange={(event)=> this.setState({newTodoText: event.nativeEvent.text})} 
                                style={styles.input}
                                value={this.state.newTodoText}
                                returnKeyType="done"    
                                placeholder="New To-Do"/>
                </View>

                <ScrollView automaticallyAdjustContentInsets={false}>
                    {this.renderTodos()}
                </ScrollView>
            </View>        
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    topBar:{
        padding: 16,
        paddingTop: 28,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb300'
    },
    title:{
        color: 'white',
        fontSize: 20,
    },
    inputContainer:{
        padding: 10,
        paddingTop: 0,
        backgroundColor: "#ffb300"
    },
    input:{
        height: 26,
        padding: 7,
        paddingTop: 0,
        paddingLeft: 8,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    todoText:{
        color: 'black',
    },

    todoContainer:{
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginBottom: -1,
        borderColor: "#ccc",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

var mapStateToProps = (state)=>{                ///Map the values of state to props
    return {
        todos: state.todos
    }
}
module.exports = connect(mapStateToProps)(MainApp); //establish connection with state,props, reducer, actions and store