import { ReactElement } from 'react'
import { Props } from './Props'
import { Row, usePagination, useSortBy, useTable } from 'react-table'
import Svg from '../Svg'

export default function Table({ columns, data }: Props): ReactElement {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    rows,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  )

  return (
    <div className="bg-primary rounded-2xl overflow-auto">
      <table
        {...getTableProps()}
        className="w-full bg-primary rounded-2xl overflow-auto"
      >
        <thead className="overflow-y-auto overflow-x-hidden">
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="font-normal py-2 border-bgSecondary border"
                >
                  <span className="flex items-center justify-center">
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Svg icon="chevronDown" className="ml-1 h-4 w-4" />
                      ) : (
                        <Svg icon="chevronUp" className="ml-1 h-4 w-4" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody
          {...getTableBodyProps()}
          className="overflow-y-scroll overflow-x-hidden"
        >
          {page.map((row: Row, i: number) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="text-center font-light py-4 border-bgSecondary border"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{justifyContent: 'flex-end', padding: '1rem'}} className="flex items-center">
        <p className="mb-0">{rows.length} Results</p>
        
        {/* <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize: number) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  )
}
