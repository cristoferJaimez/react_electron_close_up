export const resolvers = {
  Query: {
    hello: () => {
      return "hello, word!..";
    },
    greet(root, { name } ) {
      console.log(name);
      return name;
    },
  },
};
