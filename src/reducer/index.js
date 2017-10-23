import uuid from 'uuid';

module.exports = (state, action ) =>{   //use the todo action from actions
    switch (action.type) {              //see the type of action
        case "ADD_TODO":

            var newTodos=[
                ...state.todos,         // save the todos in list
                {
                    text: action.text,  //todo text
                    id: uuid.v4(),      //todo id
                }
            ];
            return {
                todos: newTodos         //return newtodos
            }
            case "delete_Todo":

              var removal = state.todos.filter((todo)=>{
                if(todo.id == action.id){
                    return false
                }
                return true
              })
              return{
                  todos: removal
              }
        
        
        default:
            return state;
    }

}