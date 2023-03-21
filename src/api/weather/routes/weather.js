module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/weather',
      handler: 'weather.getWeather',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
