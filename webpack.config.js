const path = require("path")

module.exports = (env, {mode}) => {
    mode = mode || "development"

    return {
        mode,
        entry: {
            index: "./client/index.mjs",
        },
        output: {
            path: path.join(__dirname, "public/generated"),
            publicPath: "/public/generated",
        },
        devServer: {
            port: process.env.DEV_SERVER_PORT || 3001,
            hot: true,
            compress: true,
            overlay: true,
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.html$/,
                    use: "raw-loader",
                },
            ],
        },
    }
}
