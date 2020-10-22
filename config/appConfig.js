module.exports = {
  PORT: 5000,

  USER_ROLE_TYPE1:'type1',
  USER_ROLE_TYPE2:'type2',
  USER_ROLE_TYPE3:'type3',

  JWT_SECRET: 'secretAccessWord',
  ACCESS_TOKEN_LIFETIME: '10m',

  JWT_REFRESH_SECRET: 'secretRefreshWord',
  REFRESH_TOKEN_LIFETIME: '30d',



  FORGOT_PASS_URL:'http://localhost:5000/auth/reset/',
}
