const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType ,
  GraphQLString ,
  GraphyQLInt} = graphql

const users = [
  { "id": "1", "firstname": "John Doe", "age": 22 },
  { "id": "2", "firstname": "jack",     "age": 23 },
  { "id": "3", "firstname": "king",     "age": 24 },
  { "id": "4", "firstname": "kafi",     "age": 25 },
];


const UserType = new GraphQLObjectType({
    name : "User",
    fields:{
        id:       {type: GraphQLString},
        firstname:{type: GraphQLString},
        age:      {type: GraphyQLInt} ,
       
        
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