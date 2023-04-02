const {app} = require('./app');
const dotenv = require('dotenv');
const {Sequelize} = require('sequelize');

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("server running on port " + process.env.PORT);
  });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


