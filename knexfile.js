module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/g102-database"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
