module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/playground/dist/'
    : '/'
}
