type AWSCloudFrontFunctionHandler = (
  event: AWSCloudFrontFunction.Event
) => AWSCloudFrontFunction.Request | AWSCloudFrontFunction.Response
