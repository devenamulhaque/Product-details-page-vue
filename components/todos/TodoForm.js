export default {
    template: `
        <form @submit.prevent="addNew" class="flex mb-5">
            <input v-model="newTodoItem" class="w-full px-3" type="text" placeholder="Add new todo item" />
            <button class="bg-black text-white w-[120px]" type="submit">Add New</button>
        </form>
    `,
    data(){
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addNew() {
            if (this.newTodoItem !== '') {
                this.$emit('add', this.newTodoItem)
            }
            this.newTodoItem = ''
        }
    }
}