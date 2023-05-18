export default {
    template: `
    <li>
        <label>
            <input class="mr-2" type="checkbox" v-model="todo.complete">
            {{todo.task}}
        </label>
    </li>                                                   
    `,
    props: {
        todo: Object
    }
}