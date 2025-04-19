export function commonPagination (query) {
  const { pageRaw, limitRaw } = query;
  const page = Math.max(parseInt(pageRaw, 10) || 1, 1);
  const limit = Math.max(parseInt(limitRaw, 10) || 20, 1);
  const offset = (page - 1) * limit;

  return {
    limit,
    offset,
    currentPage: page,
    getMeta(totalItems) {
      const totalPages = Math.ceil(totalItems / limit);
      return {
        totalItems,
        totalPages,
        currentPage: page,
      }
    }
  }
}