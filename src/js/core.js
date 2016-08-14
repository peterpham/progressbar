require.config({
	paths: {
		// nunjucks (template engine) http://mozilla.github.io/nunjucks/
		"nunjucks" 				: "vendor/nunjucks-slim.min"
	},
	shim: {
		"nunjucks" 					: {"exports": "nunjucks"}
	}
});