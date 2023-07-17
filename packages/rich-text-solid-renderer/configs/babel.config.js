
module.exports = {
    "presets": [
        "@babel/preset-typescript",
        "@babel/preset-env",
        "solid",
        [
            "minify",
            {
                "builtIns": false
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "helpers": false
            }
        ]
    ],
    "comments": false
}