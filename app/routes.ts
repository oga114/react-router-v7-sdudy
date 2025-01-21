import { route, index, layout, prefix } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),
  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),
  ...prefix("posts", [
    index("./posts/home.tsx"),
    layout("./posts/layout.tsx", [
      route(":id", "./posts/post.tsx"),
    ]),
  ]),
  ...prefix("playground", [
    index("./playground/home.tsx"),
  ]),
];
