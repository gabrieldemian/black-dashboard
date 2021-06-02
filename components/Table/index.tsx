import { ReactElement } from 'react'
import { Props } from './Props'
import { Row, useFilters, usePagination, useTable } from 'react-table'
import { Button } from '~/components'
import { motion } from 'framer-motion'

export default function Table({ columns, data }: Props): ReactElement {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    rows,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    usePagination
  )

  return (
    <div className="rounded-2xl overflow-auto">
      <table
        {...getTableProps()}
        className="w-full rounded-2xl overflow-auto"
        style={{ borderSpacing: '0 1rem', borderCollapse: 'separate' }}
      >
        <thead className="overflow-y-auto overflow-x-hidden">
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="font-normal py-2"
                >
                  <span className="flex flex-col flex-wrap items-center justify-center">
                    {column.render('Header')}
                    {column.canFilter ? column.render('Filter') : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <motion.tbody
          layout
          {...getTableBodyProps()}
          className="overflow-y-scroll overflow-x-hidden"
        >
          {page.map((row: Row, i: number) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                className="shadow-md transition hover:shadow-none"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="text-center font-light py-4 bg-primary first:rounded-l-lg last:rounded-r-lg"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </motion.tbody>
      </table>
      <div
        style={{ justifyContent: 'flex-end', padding: '1rem' }}
        className="flex items-center"
      >
        <Button
          className="mr-2"
          size="sm"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {'<-'}
        </Button>
        <Button
          className="mr-4"
          size="sm"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          {'->'}
        </Button>

        <p className="mb-0">{rows.length} Results</p>
      </div>
    </div>
  )
}
