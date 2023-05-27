export default {
    template: `
    <div>
    <button 
    @click="currentTag = tag"
    v-for="tag in todoTags" 
    class="text-black border border-gray-400 hover:border-gray-800 hover:bg-gray-800 hover:text-white px-3 py-1 rounded mr-2 mb-2">
    {{tag}}
    </button>
</div>
    `,
    props: {
        todoTags: Array,
        currentTag: String
    },
    data () {
        return {
            currentTag: ''
        }
    }
}