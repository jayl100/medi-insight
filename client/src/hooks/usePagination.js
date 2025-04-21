import { useMemo } from 'react';

export default function usePagination(
  currentPage,
  totalPages,
  maxVisible = 5
) {
  return useMemo(() => {
    const half  = Math.floor(maxVisible / 2);
    let start   = currentPage - half;
    let end     = currentPage + half;

    if (start < 1) {
      start = 1;
      end   = Math.min(maxVisible, totalPages);
    }
    if (end > totalPages) {
      end   = totalPages;
      start = Math.max(1, totalPages - maxVisible + 1);
    }

    const pages = [];
    if (start > 1) pages.push(1, '…');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages) pages.push('…', totalPages);

    return pages;
  }, [currentPage, totalPages, maxVisible]);
}
