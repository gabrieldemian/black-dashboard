import { ReactElement, useMemo } from 'react'
import { Table } from '~/components'
import ColumnFilter from '~/components/Table/ColumnFilter'

interface Props {}

export default function clients({}: Props): ReactElement {
  const columns: any = useMemo(
    () => [
      {
        Header: 'Clients',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            Filter: ColumnFilter,
          },
          {
            Header: 'Email',
            accessor: 'email',
            Filter: ColumnFilter,
          },
          {
            Header: 'Location',
            accessor: 'location',
            Filter: ColumnFilter,
          },
          {
            Header: 'Phone',
            accessor: 'phone',
            Filter: ColumnFilter,
          },
        ],
      },
    ],
    []
  )

  const data: any = [
    { name: 'Gabriel Costa', email: 'gabrielgcr45@gmail.com', location: 'Curitiba / PR', phone: '41 987263009' },
    { name: 'Gabriel Augusto', email: 'radax@gmail.com', location: 'Brasília / DF', phone: '61 987263009' },
    { name: 'Gaúcho Bah', email: 'kcetinho@gmail.com', location: 'Gramado / RS', phone: '53 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
    { name: 'Gabriel Costa', email: 'gabrielgcr45@gmail.com', location: 'Curitiba / PR', phone: '41 987263009' },
    { name: 'Radamer Augusto', email: 'radax@gmail.com', location: 'Brasília / DF', phone: '61 987263009' },
    { name: 'Gaúcho Bah', email: 'kcetinho@gmail.com', location: 'Gramado / RS', phone: '53 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
    { name: 'Gabriel Costa', email: 'gabrielgcr45@gmail.com', location: 'Curitiba / PR', phone: '41 987263009' },
    { name: 'Radamer Augusto', email: 'radax@gmail.com', location: 'Brasília / DF', phone: '61 987263009' },
    { name: 'Gaúcho Bah', email: 'kcetinho@gmail.com', location: 'Gramado / RS', phone: '53 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
  ]

  return (
    <div className="container">
      {/* <Input placeholder="Search" icon="search" className="p-4 text-sm" /> */}
      <Table data={data} columns={columns} />
    </div>
  )
}
