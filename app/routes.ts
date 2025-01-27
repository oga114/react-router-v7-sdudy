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
  ...prefix("practice", [
    index("./practice/home.tsx"),
    route("utility-types", "./practice/utility-types.tsx"),
    route("deep-merge", "./practice/deep-merge.tsx"),
    route("mapped-types", "./practice/mapped-types.tsx"),
    route("keyof", "./practice/keyof.tsx"),
    route("deep-copy", "./practice/deep-copy.tsx"),
    route("custom-hook", "./practice/custom-hook.tsx"),
    route("immutability", "./practice/immutability.tsx"),
  ]),
];
