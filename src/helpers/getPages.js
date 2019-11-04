import range from 'lodash/range';

const MAX_PAGES = 5;
const PADDING = 2;

export default function (current, pageSize, total) {
  const totalPages = Math.ceil(total/pageSize);
  let startPage = 1;
  let endPage = totalPages + 1;

  if(totalPages > MAX_PAGES) {
    startPage = current > PADDING ? current - PADDING : 1;

    if(totalPages - current <= PADDING) {
      startPage = totalPages - (MAX_PAGES - 1);
    }

    endPage = startPage + (MAX_PAGES);

    if (endPage > totalPages) {
      endPage = totalPages + 1;
    }
  }

  return range(startPage, endPage);
}
