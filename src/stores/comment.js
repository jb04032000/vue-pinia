import { defineStore } from "pinia";
import { usePostStore } from "./post";

const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

export const useCommentStore = defineStore({
  id: "comment",
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore();
      return state.comments.filter((post) => post.postId === postSore.post.id);
    },
  },
  actions: {
    async fetchComments() {
      this.comments = await fetch(BASE_URL).then((res) => res.json());
    },
  },
});
