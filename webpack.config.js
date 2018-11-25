const path = require("path")

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        index: "./client/index.mjs",
    },
    output: {
        path: path.join(__dirname, "public/generated"),
        publicPath: "/public/generated",
    },
    devServer: {
        port: process.env.DEV_SERVER_PORT || 3001,
        compress: true,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
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
        ],
    },
}
