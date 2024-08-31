import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const Pagination = ({
  pagination,
  setPaginationIndex,
  className,
}: any) => {
  const total_pages = pagination?.total_entries / pagination?.per_page;
  const nextPages = [];
  const previousPages = [];
  const totalPages = Math.ceil(total_pages);
  const currentPage = pagination?.current_page;
  const prev_page_url = currentPage > 1 ? currentPage - 1 : null;
  const next_page_url = currentPage < totalPages ? currentPage + 1 : null;
  for (let i = 1; i < 4; i++) {
    if (currentPage > i) {
      previousPages.push({ pageIndex: i });
    }
  }

  for (let i = totalPages; i >= totalPages - 2; i--) {
    if (i > currentPage) {
      nextPages.push({ pageIndex: i });
    }
  }

  return (
    <div
      className={`isolate inline-flex -space-x-px rounded-md mt-[14px] justify-center  ${className}`}
      aria-label="Pagination"
    >
      <button
        onClick={() => {
          prev_page_url === null
            ? () => false
            : setPaginationIndex(prev_page_url);
        }}
        className={`relative inline-flex cursor-pointer items-center gap-2  rounded-l-lg px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700 ring-1 ring-inset ring-gray ${
          prev_page_url === null ? "btn-disable" : ""
        }`}
      >
        <IconArrowLeft />
        <span className="">Previous</span>
      </button>

      {previousPages &&
        previousPages.map((item, index) => {
          return (
            <button
              key={`previous-pages-${index}`}
              onClick={() => setPaginationIndex(item.pageIndex)}
              className="font-semibold text-sm relative hidden items-center px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700  ring-1 ring-inset ring-gray  lg:inline-flex "
            >
              {item.pageIndex}
            </button>
          );
        })}

      {pagination?.current_page - 1 > 4 && (
        <span className="font-semibold text-sm relative hidden items-center px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700  ring-1 ring-inset ring-gray focus:outline-offset-0 sm:inline-flex">
          <h2>...</h2>
        </span>
      )}

      {pagination?.current_page - 1 > 3 && (
        <button
          onClick={() =>
            prev_page_url === null
              ? () => false
              : setPaginationIndex(prev_page_url)
          }
          className={`relative inline-flex cursor-pointer items-center gap-2  px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700  ring-1 ring-inset ring-gray ${
            prev_page_url === null ? "btn-disable" : ""
          }`}
        >
          <span className=""> {pagination?.current_page - 1}</span>
        </button>
      )}

      <span className="font-semibold text-sm relative  items-center bg-primary-100/10 bg-opacity-40 px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-primary-100/15 ring-1 ring-inset ring-gray focus:outline-offset-0 inline-flex">
        {pagination?.current_page}
      </span>

      {pagination?.current_page + 1 < totalPages - 2 && (
        <button
          onClick={() =>
            next_page_url === null
              ? () => false
              : setPaginationIndex(next_page_url)
          }
          className={`relative inline-flex cursor-pointer items-center gap-2 px-4  py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700 ring-1 ring-inset ring-gray ${
            next_page_url === null ? "btn-disable" : ""
          }`}
        >
          <span className="">{pagination?.current_page + 1}</span>
        </button>
      )}
      {pagination?.current_page + 1 < totalPages - 3 && (
        <span className="font-semibold text-sm relative hidden items-center px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700 ring-1 ring-inset ring-gray focus:outline-offset-0 sm:inline-flex">
          <h2>...</h2>
        </span>
      )}

      {nextPages &&
        nextPages.reverse().map((item, index) => {
          return (
            <button
              key={`next-pages-${index}`}
              onClick={() => setPaginationIndex(item.pageIndex)}
              className={`font-semibold text-sm relative hidden items-center px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700 ring-1 ring-inset ring-gray  lg:inline-flex ${
                pagination?.current_page === item.pageIndex
                  ? "bg-[#F9FAFB]"
                  : ""
              }`}
            >
              {item.pageIndex}
            </button>
          );
        })}

      <button
        onClick={() =>
          next_page_url === null
            ? () => false
            : setPaginationIndex(next_page_url)
        }
        className={`relative inline-flex cursor-pointer items-center gap-2 rounded-r-lg px-4 py-[10px] text-14 font-600 text-gray-200 hover:bg-gray-700 ring-1 ring-inset ring-gray ${
          next_page_url === null ? "btn-disable" : ""
        }`}
      >
        <span className="">Next</span>
        <IconArrowRight />
      </button>
    </div>
  );
};
