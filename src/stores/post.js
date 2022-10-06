import { defineStore } from "pinia";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) =>
        state.posts.filter((post) => post.userId === authorId);
    },
  },
  actions: {
    async fetchPosts() {
      this.posts = [];
      this.loading = true;
      try {
        this.posts = await fetch(BASE_URL).then((res) => res.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id) {
      this.post = null;
      this.loading = true;
      try {
        this.post = await fetch(BASE_URL + `/${id}`).then((res) => res.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
