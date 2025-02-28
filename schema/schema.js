const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");
const _ = require("lodash");


  // import { GraphQLSchema, GraphQLObjectType, GraphQLString , GraphQLInt } from "graphql";


const users = [
  { "id": "23", "firstname": "John Doe", "age": 22 },
  { "id": "47", "firstname": "jack",     "age": 23 },
  { "id": "13", "firstname": "king",     "age": 24 },
  { "id": "76", "firstname": "kafi",     "age": 25 },
];


const UserType = new GraphQLObjectType({
    name : "User",
    fields:{
        id:       {type: GraphQLString},
        firstname:{type: GraphQLString},
        age:      {type: GraphQLInt} ,
       
        
    }
})


const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    user:{
    
type:UserType,
args:{id:{type:GraphQLString}},
resolve(parentValue,args){
  return _.find(users,{id:args.id})

    }
  }
}
})

module.exports = new GraphQLSchema({
  query: RootQuery
})