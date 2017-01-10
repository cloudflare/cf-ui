// @flow

type Json =
  | string
  | number
  | boolean
  | null
  | Array<Json>
  | { [key: string]: Json };

type Result =
  | null
  | Array<Json>
  | { [key: string]: Json };

type Errors =
  | null
  | Array<string>;

type Messages = Array<string>;

function createApiResponse(result?: Result = null, errors?: Errors = null, messages?: Messages = []) {
  let resultInfo = null;

  if (Array.isArray(result)) {
    resultInfo = {
      page: 1,
      per_page: 20,
      count: result.length,
      total_count: result.length
    };
  }

  return {
    body: {
      success: !(errors && errors.length),
      result,
      result_info: resultInfo,
      errors,
      messages
    }
  };
}

module.exports = createApiResponse;
