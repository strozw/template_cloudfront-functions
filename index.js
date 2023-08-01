/**
 * @type {AWSCloudFrontFunctionHandler}
 */
function handler(event) {
	var request = event.request
	var response = event.response

	if (response) {
		return response
	}

	;[].forEach(function() { })

	return request
}
