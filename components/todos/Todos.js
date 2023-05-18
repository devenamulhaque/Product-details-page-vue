import TodoList from './TodoList.js'
export default {
    components: {TodoList},
    template: `
    <div class="todos">
    <h1 class="text-3xl mb-5">Todos</h1>
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
            ]
        }
    },
    computed: {
        filtered () {
            return {
                inProgress: this.todos.filter(done => !done.complete),
                completed: this.todos.filter(done => done.complete)
            }
        }
    }
}