const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');


export const DateType = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue({value}:{value:any}) {
      return new Date(value); // value from the client
    },
    serialize({value}:{value:any}) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral({ast}:{ast:any}) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};


