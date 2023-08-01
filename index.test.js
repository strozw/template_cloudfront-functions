// @ts-ignore
var rewire = require("rewire")

/**
 * @type {AWSCloudFrontFunctionHandler}
 */
var handler = rewire("./index.js").__get__("handler")

test("a", function() {
	handler({
		viewer: {
			ip: "",
		},
		context: {
			eventType: "viewer-request",
			requestId: "",
			distributionId: "",
			distributionDomainName: "",
		},
		request: {
			uri: "",
			method: "GET",
			cookies: {},
			headers: {},
			querystring: {},
		},
		version: "1.0",
		response: {
			statusCode: 200,
		},
	})

	expect(true).toBe(true)
})
