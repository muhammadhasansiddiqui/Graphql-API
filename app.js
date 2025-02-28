const express = require('express');
const expressGraphQl = require('express-graphql');
const port = 4000;
const app = express();
const schema = require('./schema/schema');

app.use(
'/graphql',
  expressGraphQl({
    schema,
    graphql: true
  })
)

app.listen(port, () => {
  console.log("🚀 ~ Server is running on port:", port);
  console.log(`Server is running on port ${port}`);
});
