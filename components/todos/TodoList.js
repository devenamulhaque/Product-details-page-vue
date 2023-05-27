import TodoItem from './TodoItem.js'
export default {
    components: { TodoItem },
    template: `
        <div v-if="todos.length" class="mb-5 border px-5 py-6 border-gray-300 rounded">
            <h2 class="text-xl mb-3">{{title}} - ({{todos.length}})</h2>
            <ul>
                <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo"></TodoItem>
            </ul>
        </div>
    `,
    props: {
        title: String,
        todos: Array,
        deleteTodo: {
            type: Function,
            required: true
        },
        filteredTodos: Array
    }
}