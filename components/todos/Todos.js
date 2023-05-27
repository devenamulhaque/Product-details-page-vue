import TodoList from './TodoList.js'
import TodoForm from "./TodoForm.js";
import TodoButtons from "./TodoButtons.js";
import TodoTags from "./TodoTags.js";



export default {
    components: {TodoList, TodoForm, TodoButtons, TodoTags},
    template: `
    <div class="todos">
        <h1 class="text-3xl mb-5">Todos</h1>
        <todo-form @add="addNewTask"></todo-form>
        <TodoTags :currentTag="this.currentTag" :todoTags="tags"></TodoTags>
        <todo-list :deleteTodo="deleteTodo" :filteredTodos="filteredTodos" :todos="filtered.inProgress" title="Completed list"></todo-list>
        <todo-list :deleteTodo="deleteTodo" :todos="filtered.completed" title="In Progress list"></todo-list>
        <todo-buttons :clearAll="deleteCompletedTodo" :todos="filtered.completed" :resetAll="resetTodos"></todo-buttons>
    </div>
    `,
    data(){
        return {
            todos: [
                {
                    task: "Check the file",
                    complete: false,
                    id: 10,
                    tag: 'Science'
                },
                {
                    task: "Check the image of Panda",
                    complete: true,
                    id: 11,
                    tag: 'Math'
                },
                {
                    task: "Testing for Vue",
                    complete: false,
                    id: 12,
                    tag: 'Science'
                },
                {
                    task: "Testing for reactjs",
                    complete: false,
                    id: 13,
                    tag: 'Physics'
                },
            ],
            newTodoItem: '',
            currentTag: ''
        }
    },
    computed: {
        filtered () {
            return {
                inProgress: this.todos.filter(done => !done.complete),
                completed: this.todos.filter(done => done.complete)
            }
        },
        filteredTodos () {
          console.log(this.currentTag)
        },
        tags(){
            return new Set(this.todos.map(tag => tag.tag))
        }
    },
    methods: {
        addNewTask(task){
            this.todos.unshift({
                task: task,
                complete: false,
                id: this.todos.length + 11
            })
        },
        deleteTodo(index){
            this.todos.splice(this.todos.indexOf(index), 1)
        },
        deleteCompletedTodo () {
            this.todos = this.todos.filter(todo => !todo.complete)
        },
        resetTodos(){
            this.todos = this.todos.map(todo => {
                return {
                    task: todo.task,
                    completed: false,
                    id: todo.id
                }
            })
        }
    }
}