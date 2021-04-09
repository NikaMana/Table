import './App.css';

import React from 'react';
import { useTable } from 'react-table';

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })
  return(
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              })}
              <input type= 'submit' name= 'type' />
              <input type= 'submit' name= 'type' />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName'
          },
          {
            Header: 'Last Name',
            accessor: 'lastName'
          },
          {
            Header: 'user',
            accessor: 'user'
          },
          {
            Header: 'mail',
            accessor: 'mail'
          },
          {
            Header: 'Login',
            accessor: 'login'
          }
        ],
      },
    ]
  )

  const data = React.useMemo(() => [
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login',
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login'
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login'
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login'
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login'
    },
    {
      firstName: 'firstName',
      lastName: 'lastName',
      user: 'user',
      mail: 'mail',
      login: 'login'
    }
], [])
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
