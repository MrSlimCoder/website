const withSass = require('@zeit/next-sass');

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader'
            }
        });

        return config;
    }
});
