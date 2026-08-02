export function successResponse(message, data = null, status = 200) {
  return Response.json(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    },
  );
}

export function errorResponse(message, status = 500, errors = null) {
  return Response.json(
    {
      success: false,
      message,
      errors,
    },
    {
      status,
    },
  );
}
