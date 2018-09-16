const state = () => ({
    posts: []
})


const mutations = {
    put(state, posts) {
        state.posts = posts
    }
}
export default { state, mutations }