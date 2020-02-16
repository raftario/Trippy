module.exports = {
    transpileDependencies: ["vuetify"],
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "Trippy",
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.node$/,
                    use: "node-loader",
                },
            ],
        },
    },
};
