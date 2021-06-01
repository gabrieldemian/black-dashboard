import { ReactElement } from 'react'
import { Props } from './Props'
import { useSortBy, useTable } from 'react-table'
import Svg from '../Svg'

export default function Table({ columns, data }: Props): ReactElement {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    )

  return (
    <div className="bg-primary rounded-2xl py-4">
      <table {...getTableProps()} className="w-full bg-primary rounded-2xl overflow-auto">
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

        <tbody {...getTableBodyProps()} className="overflow-y-scroll overflow-x-hidden">
          {rows.map((row, i) => {
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
    </div>
  )
}
