const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addFilter("postDate", (dataObj) => {
        return DateTime.fromJSDate(dataObj).toLocaleString(DateTime.DATE_MED);
    });
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}