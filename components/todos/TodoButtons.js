export default {
    template: `
        <div class="mb-3">
            <button @click="clearAll" class="bg-black py-2 px-3 rounded text-white mr-2 mb-2">Clear All</button>
            <button @click="resetAll" class="bg-purple-600 py-2 px-3 rounded text-white mr-2 mb-2">Reset</button>
        </div>
    `,
    props: {
        clearAll: {
            type: Function
        },
        resetAll: {
            type: Function
        },
        Todos: Array
    }
}