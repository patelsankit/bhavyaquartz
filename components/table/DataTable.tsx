import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { FormSelect } from "../ui/form-select";
import { ExtendedColumnDef } from "@/constant/dataTableColumn";
import { useTableStore } from "@/store/useTableStore";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "../ui/Input";
import { Pagination } from "./Pagination";
import IconSearch from "../icons/IconSearch";

interface DataTableProps<TData, TValue> {
  columns: ExtendedColumnDef<TData, TValue>[];
  data: TData[];
  columnSortIndex?: number;
  pagination?: any;
  actions?: any;
  conditionalRowStyles?: any;
  className?: string;
  tableClassName?: string;
  filterContent?: any;
  showSearchBox?: boolean;
  fixFirstColumn?: boolean;
  searchBoxPlaceHolder?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  columnSortIndex,
  pagination,
  actions,
  filterContent,
  showSearchBox,
  fixFirstColumn,
  conditionalRowStyles,
  tableClassName,
  className = "",
  searchBoxPlaceHolder,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const setPerPage = useTableStore((state: any) => state.setPerPage);
  const PerPage = useTableStore((state: any) => state.PerPage);
  const [columnSorted, setColumnSorted] = useState<number>(
    columnSortIndex ? columnSortIndex : 0
  );
  const [order, setOrder] = useState<any>("desc");

  // dropdown for perPage item
  const option = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  const [actionValue, setActionValue] = useState<any>({
    page: 1,
    per_page: 10,
    order: order,
  });

  // useEffect(() => {
  //   if (columnSortIndex) {
  //     setActionValue({ ...actionValue, expression: columnSortIndex });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [columnSortIndex]);

  const debouncedValue = useDebounce<string>(actionValue, 500);

  const setColumnOrder = (index: any) => {
    if (columnSorted === index) {
      setOrder(order === "desc" ? "asc" : "desc");
      const data = {
        page: 1,
        per_page: 10,
        order: order === "desc" ? "asc" : "desc",
        expression: index,
      };
      setActionValue(data);
      actions(data);
    } else {
      const data = {
        page: 1,
        per_page: 10,
        order: "desc",
        expression: index,
      };
      setActionValue(data);
      actions(data);
      setOrder("desc");
    }
    setColumnSorted(index);
  };

  useEffect(() => {
    actions(actionValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, PerPage]);
  return (
    <>
      {(showSearchBox || filterContent) && (
        <div
          className={`${
            showSearchBox || filterContent
              ? "flex sm:items-center justify-between sm:flex-row flex-col-reverse gap-2"
              : ""
          } mt-4`}
        >
          {showSearchBox && (
            <>
              <div className="relative">
                <Input
                  className="w-full lg:min-w-[390px] rounded-lg !pl-11 p-2 placeholder:text-14 !border border-solid !border-gray !outline-0 text-14 leading-6 focus-visible:outline-none sm:w-auto md:text-14 bg-white"
                  type="search"
                  placeholder={
                    searchBoxPlaceHolder
                      ? searchBoxPlaceHolder
                      : "Search here..."
                  }
                  onChange={(e) => {
                    setActionValue((prev: any) => ({
                      ...prev,
                      search: e.target.value,
                    }));
                  }}
                />
                <IconSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
              </div>
            </>
          )}
          {filterContent}
        </div>
      )}
      <div
        className={`mt-6 shadow-card p-5 rounded-xl bg-white dark:bg-black ${tableClassName}`}
      >
        <Table className={`data-table ${className}`}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any, headerIndex) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={() => {
                        header.column.columnDef?.disableSortBy !== true
                          ? setColumnOrder(
                              header?.column?.columnDef?.accessorKey
                            )
                          : () => false;
                      }}
                      className={
                        `relative bg-gray-700 text-gray-300 font-500 p-2 md:p-3.5 pl-8 md:pl-10 ${
                          headerIndex === 0 && fixFirstColumn
                            ? "sticky left-0 z-[1] bg-gray-700 text-gray-300"
                            : ""
                        }` +
                        (header.column.columnDef?.disableSortBy !== true
                          ? " short-btn cursor-pointer"
                          : " disabledSort") +
                        (columnSorted == header.column.columnDef?.accessorKey
                          ? " short-btn"
                          : "") +
                        (columnSorted == header.column.columnDef?.accessorKey
                          ? order == "desc"
                            ? " sort-desc "
                            : " sort-asc "
                          : "")
                      }
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table?.getRowModel().rows?.length ? (
              table?.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  style={
                    conditionalRowStyles?.find((style: any) => style.when(row))
                      ?.style
                  }
                  className="hover:bg-gray-500"
                >
                  {row.getVisibleCells().map((cell, cellIndex) => (
                    <TableCell
                      key={cell.id}
                      className={`text-gray-1300 pl-8 md:pl-10 ${
                        cellIndex === 0 && fixFirstColumn
                          ? "sticky left-0 z-[1] bg-gray-700 text-gray-1300"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 !text-center"
                >
                  No Results Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {pagination?.total_entries === 0
          ? // <div className="py-2 px-4 text-center text-14 sm:text-16">
            //   No Records Found
            // </div>
            ""
          : ""}
        {pagination && (
          <div className="flex gap-3 justify-between flex-wrap">
            <div className="mt-3 ml-3 flex gap-4 sm:justify-start justify-between items-center text-14 text-gray-1150 short_data">
              {pagination?.total_entries} Enteries
              <FormSelect
                defaultValue={option[0]}
                className="rounded-lg text-black-100 pagination-custom-select"
                onChange={(e: any) => {
                  setActionValue({
                    ...actionValue,
                    per_page: e.value,
                    page: 1,
                  }),
                    setPerPage(e.value);
                }}
                options={option}
                menuPlacement="top"
              />
            </div>
            <Pagination
              setPaginationIndex={(e: any) => {
                setActionValue({ ...actionValue, page: e });
                actions({ ...actionValue, page: e });
              }}
              pagination={pagination}
            />
          </div>
        )}
      </div>
    </>
  );
}
