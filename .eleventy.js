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
    eleventyConfig.addLayoutAlias('home', 'home.njk');
    eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');
    eleventyConfig.addLayoutAlias('page', 'single.njk');
    eleventyConfig.addLayoutAlias('projects', 'layouts/project/list.njk');
    eleventyConfig.addLayoutAlias('project', 'layouts/project/single.njk');

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy({ 'src/assets/favicons': '/' });

    // You can return your Config object (optional).
    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: "_includes",
            data: '_data'
        },
        passthroughFileCopy: true
    }
};