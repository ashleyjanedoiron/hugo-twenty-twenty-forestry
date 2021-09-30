// Import filters
const markdown = require('./src/filters/markdown-filter.js');

module.exports = function (eleventyConfig) {

    /**
    * Add Filters
    *
    * @link https://www.11ty.dev/docs/filters/
    */
    eleventyConfig.addFilter('markdown', markdown);

    /**
    *
    * Add layout Aliasing
    *
    * @link https://www.11ty.dev/docs/layouts/#layout-aliasing
    */
    eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
    // eleventyConfig.addLayoutAlias('page', 'layouts/single.njk');
    // eleventyConfig.addLayoutAlias('projects', 'layouts/projects/list.njk');
    // eleventyConfig.addLayoutAlias('project', 'layouts/projects/single.njk');
    // eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');

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