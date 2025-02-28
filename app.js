const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // ✅ Fix: Correct import
const schema = require('./schema/schema');

const app = express();
const port = 4000;

app.use(
  '/graphql',
  graphqlHTTP({ // ✅ Fix: Use `graphqlHTTP`
    schema,
    graphiql: true, // ✅ Fix: Correct spelling (was `graphql` instead of `graphiql`)
  })
);

app.listen(port, () => {
  console.log("🚀 ~ Server is running on port:", port);
});
