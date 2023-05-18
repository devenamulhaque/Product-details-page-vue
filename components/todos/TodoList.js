import TodoItem from './TodoItem.js'
export default {
    components: { TodoItem },
    template: `
        <div v-if="todos.length" class="mb-5">
            <h2 class="text-xl">{{title}}</h2>
            <ul>
                <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
            </ul>
        </div>
    `,
    props: {
        title: String,
        todos: Array
    }
}