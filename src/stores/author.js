import { defineStore } from "pinia";
import { usePostStore } from "./post";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const useAuthorStore = defineStore({
  id: "author",
  state: () => ({
    authors: [],
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore();
      return state.authors.find(
        (author) => author.id === postStore.post.userId
      );
    },
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch(BASE_URL).then((res) => res.json());
    },
  },
});
