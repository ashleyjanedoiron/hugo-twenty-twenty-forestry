module.exports = function (eleventyConfig) {

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: '_site',
            data: '_data'
        },
        passthroughFileCopy: true
    };
};