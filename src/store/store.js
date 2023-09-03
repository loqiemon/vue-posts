import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },
    addPosts(state, newPosts) {
      newPosts.forEach(newPost => {
        if (!state.posts.some(post => post.id === newPost.id)) {
          state.posts.push(newPost);
        }
      });
    },
  },
});
