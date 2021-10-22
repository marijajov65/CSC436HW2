function todoReducer(state, action){
    switch(action.type){
      case 'CREATE_TODO':
        const newTodoItem = {
            title:action.data.title,
            description: action.data.description,
            dateCompleted: action.data.dateCompleted,
            dateCreated: action.data.dateCreated,
            id: action.data.id
          }
        return [newTodoItem, ...state]
      case 'TOGGLE_TODO': 
        return state.map(todo=> todo.id===action.id?{...todo, checked: !todo.checked,dateCompleted : todo.dateCompleted ? '' : action.getDate} : todo)
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id)
      case 'FETCH_POSTS':
        return action.todoItems
      default:
        return state
    }
  }

  function userReducer(state, action){
    switch(action.type){
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':
        return ''
      default:
        return state
    }
  }


  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todoItems: todoReducer(state.todoItems, action)
    }
}
