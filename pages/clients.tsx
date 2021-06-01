import { ReactElement, useMemo } from 'react'
import { Card, Input, Table } from '~/components'

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
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Location',
            accessor: 'location',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
        ],
      },
    ],
    []
  )

  const data: any = [
    { name: 'Gabriel Costa', email: 'gabrielgcr45@gmail.com', location: 'Curitiba / PR', phone: '41 987263009' },
    { name: 'Radamer Augusto', email: 'radax@gmail.com', location: 'Brasília / DF', phone: '61 987263009' },
    { name: 'Gaúcho Bah', email: 'kcetinho@gmail.com', location: 'Gramado / RS', phone: '53 987263009' },
    { name: 'Alguém Seila', email: 'seila@gmail.com', location: 'Acre / Acre', phone: '41 987263009' },
  ]

  return (
    <div className="container">
      <Card className="mb-8 p-0">
        <Input placeholder="Search" icon="search" />
      </Card>

      <Card className="p-0 rounded-2xl">
        <Table data={data} columns={columns} />
      </Card>
    </div>
  )
}
