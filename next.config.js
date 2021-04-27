
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['9dWRaNXSL9g5ev5SZW4McN'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  