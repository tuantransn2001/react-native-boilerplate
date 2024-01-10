export const API_PATH = {
  auth: {
    login: "/auth/login",
    me: "/auth/me",
    register: "/auth/register",
    refresh: "/auth/refresh",
  },
  post: {
    getAll: "/post",
    like: "/post/like",
    create: "/post",
  },
  comment: {
    getAll: "/comment",
    like: "/comment/like",
    add: "/comment",
  },
  user: {
    search: "/user/search",
    getOne: "/user",
  },
  search: {
    history: "/search",
  },
};
