require('dotenv').config()
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const connection = new Sequelize(
    process.env.DATABASE,
    process.env.USER,'',
    {
      host:process.env.HOST,
      dialect:process.env.DIALECT,
      port:process.env.PORT
    }
  )

const testConn = async()=>{
    console.log("username:",process.env.USER,
                "password:",process.env.PASSWORD, 
                "database:",process.env.DATABASE,
                "host:",process.env.HOST,
                "port:",process.env.PORT,
                "dialect:", process.env.DIALECT)
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}



export const sequelize = {connection, testConn};