const path = require("path");

// Required for Paths to work with Gatsby.
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, "src/"),
        '@assets': path.resolve(__dirname, "src/assets/"),
        '@components': path.resolve(__dirname, "src/components/"),
        '@type': path.resolve(__dirname, "src/types/"),
      },
    },
  });
};
