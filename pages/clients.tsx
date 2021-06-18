import dynamic from 'next/dynamic'
import { ReactElement, useMemo } from 'react'
import { Column } from 'react-table'
import ColumnFilter from '~/components/Table/ColumnFilter'
import { ClientData } from '~/types'
const Table = dynamic(() => import('../components/Table'), { loading: () => <p>Loading...</p> })

export default function clients(): ReactElement {
  const columns: Column<object>[] = useMemo(
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

  const data: ClientData[] = [
    { name: 'Gabriel Costa', email: 'gcosta@gmail.com', location: 'Curitiba / PR', phone: '41 999999999' },
    { name: 'Gabriel Augusto', email: 'gabaugusto@gmail.com', location: 'Brasília / DF', phone: '61 999999999' },
    { name: 'Leni', email: 'leni@gmail.com', location: 'Gramado / RS', phone: '53 999999999' },
    { name: 'Fulano fulano', email: 'seila@gmail.com', location: 'São Paulo / SP', phone: '41 999999999' },
    { name: 'Guilherme Santos', email: 'gggsantos@gmail.com', location: 'Curitiba / PR', phone: '41 999999999' },
    { name: 'Vinícius Martins', email: 'vinimartins@gmail.com', location: 'Brasília / DF', phone: '61 999999999' },
    { name: 'José Ferreira', email: 'josephferreira@gmail.com', location: 'São Paulo / SP', phone: '53 999999999' },
    { name: 'Maria Silva', email: 'mariasilva@gmail.com', location: 'Porto Alegre / RS', phone: '41 999999999' },
    { name: 'Gabriel Costa', email: 'gabrielgcr45@gmail.com', location: 'Curitiba / PR', phone: '41 999999999' },
    { name: 'Ana Ribeiro', email: 'anaribeiro@gmail.com', location: 'Brasília / DF', phone: '61 999999999' },
    { name: 'Bruno Ramos', email: 'brunoramos@gmail.com', location: 'Gramado / RS', phone: '53 999999999' },
    { name: 'Ciclano Fulano', email: 'ciclanofulano@gmail.com', location: 'São Paulo / SP', phone: '41 999999999' },
    { name: 'Francisco xico', email: 'francisxico@gmail.com', location: 'Blumenau / SC', phone: '41 999999999' },
    { name: 'Mitski', email: 'mitski@gmail.com', location: 'Joinville / SC', phone: '41 999999999' },
    { name: 'Paloma Costa', email: 'palomacosta@gmail.com', location: 'Curitiba / PR', phone: '41 999999999' },
  ]

  return (
    <Table data={data} columns={columns} />
  )
}
