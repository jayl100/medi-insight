export function commonPagination(query) {
  const pageRaw  = query.page;
  const limitRaw = query.limit;

  const page  = Math.max(parseInt(pageRaw, 10)  || 1, 1);
  const limit = Math.max(parseInt(limitRaw, 10) || 20, 1);
  const offset = (page - 1) * limit;

  return {
    limit,
    offset,
    currentPage: page,
    getMeta(totalItems) {
      return {
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
      };
    },
  };
}
