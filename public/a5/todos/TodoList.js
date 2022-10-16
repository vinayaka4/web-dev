import TodoItem from "./TodoItem.js";
import todos from "./todos.js";


const TodoList = () => {
    return(`
    ${
        todos.map(todo => {
           return(TodoItem(todo));
        }).join('')
     }

    `);
 }
 export default TodoList