export const navItems = [
  {
    description: "Users",
    path: "users",
    subItems: [
      {
        description: "Albums",
        path: "users/albums",
        subItems: [{ description: "Photos", path:"users/photos" }],
      },
      { description: "Posts", path:"users/posts" },
    ],
  },
  { description: "Table", path: "table" },
];