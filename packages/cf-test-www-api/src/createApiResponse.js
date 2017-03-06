export default function createApiResponse(
  result = null,
  errors = null,
  messages = []
) {
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
