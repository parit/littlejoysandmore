module.exports = function(config) {
    config.addPassthroughCopy("./src/assets/images");
    return {
        dir: {
            input : "src",
            output: "public"
        }
    };
}