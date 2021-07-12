// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    './src': { url: '/' },
    './public': { url: '/', static: true, resolve: false },
  },
  plugins: [['@snowpack/plugin-react-refresh', {}]],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    port: 8080,
  },
  buildOptions: {
    out: './_build/snowpack',
    metaUrlPath: 'meta',
  },
  // routes: apiRoutes,
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
}

// const apiRoutes = {
//   {src: '/api/.*', dest: proxy},
//   {match: 'routes', src: '.*', dest: '/index.html'}
// }
