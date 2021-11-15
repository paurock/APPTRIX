import React, {useMemo} from "react";
import {useTable} from "react-table";
import {COLUMNS} from "./columns";
import {Link} from "react-router-dom";

const BasicTable = ({USERS}) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USERS, [USERS]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td>
                      <Link
                        {...cell.getCellProps()}
                        to={`/users/${row.original.id}/${row.original.name}/${row.original.login}/${row.original.email}/${row.original.$type}`}
                      >
                        {cell.render("Cell")}
                      </Link>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default BasicTable;
