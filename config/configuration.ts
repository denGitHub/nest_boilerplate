
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432
  },
  SERVER: {
    scheme: process.env.HTTP_SERVER_SCHEME || 'http',
    host: process.env.HTTP_SERVER_HOST || 'localhost',
    port: process.env.HTTP_SERVER_PORT || 5001,
    defaultRole: process.env.DEFAULT_ROLE_NAME || 'Other',
  }
});


