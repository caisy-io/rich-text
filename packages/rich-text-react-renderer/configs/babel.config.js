
module.exports = {
    cacheDirectory: true,
    presets: [
        [
            '@babel/preset-env',
            {

                corejs: '3',
                modules: 'auto',
                targets: [
                    "defaults",
                    "not IE 11",
                ],
                useBuiltIns: 'usage',
            },
        ],
        '@babel/react',
        '@babel/preset-typescript',
    ],
};
