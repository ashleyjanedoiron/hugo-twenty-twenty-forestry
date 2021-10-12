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
    eleventyConfig.addLayoutAlias('contact', 'layouts/contact.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/single.njk');
    // eleventyConfig.addLayoutAlias('projects', 'layouts/projects/list.njk');
    // eleventyConfig.addLayoutAlias('project', 'layouts/projects/single.njk');

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy('src/assets/');
    eleventyConfig.addPassthroughCopy({ 'src/assets/favicons': '/' });

    // You can return your Config object (optional).
    return {
        // If your site lives in a different subdirectory, change this.
        // Leading or trailing slashes are all normalized away, so don’t worry about it.
        // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
        // This is only used for URLs (it does not affect your file structure)
        pathPrefix: "/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site",
            data: "_data"
        },
        passthroughFileCopy: true
    };
};