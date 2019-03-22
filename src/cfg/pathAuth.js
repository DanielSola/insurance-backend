const paths = [
  {
    route: "/user/id/",
    authorizedRoles: ["admin", "user"],
  },
  {
    route: "/user/name/",
    authorizedRoles: ["admin", "user"],
  },
  {
      route: "/policy/name",
      authorizedRoles: ["admin"],
  }
];

export default paths;