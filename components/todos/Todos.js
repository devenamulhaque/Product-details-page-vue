import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'
export default {
    components: {TodoList, TodoForm},
    template: `
    <div class="todos">
        <h1 class="text-3xl mb-5">Todos</h1>
        <todo-form @add="addNewTask"></todo-form>
        <todo-list :todos="filtered.inProgress" title="Completed list"></todo-list>
        <todo-list :todos="filtered.completed" title="In Progress list"></todo-list>
    </div>
    `,
    data(){
        return {
            todos: [
                {
                    task: "Check the file",
                    complete: false,
                    id: 10
                },
                {
                    task: "Check the image of Panda",
                    complete: true,
                    id: 11
                },
                {
                    task: "Testing for Vue",
                    complete: false,
                    id: 12
                },
                {
                    task: "Testing for reactjs",
                    complete: false,
                    id: 13
                },
            ],
            newTodoItem: ''
        }
    },
    computed: {
        filtered () {
            return {
                inProgress: this.todos.filter(done => !done.complete),
                completed: this.todos.filter(done => done.complete)
            }
        }
    },
    methods: {
        addNewTask(task){
            this.todos.unshift({
                task: task,
                complete: false,
                id: this.todos.length + 11
            })
        }
    }
}