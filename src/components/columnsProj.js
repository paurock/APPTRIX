import {ColumnFilter} from "./ColumnFilter";

export const COLUMNS_PROJ = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    sticky: "left"
  },
  {
    Header: "Summary",
    Footer: "Summary",
    accessor: "summary",
    Filter: ColumnFilter,
    sticky: "left"
  },
  {
    Header: "Project name",
    Footer: "Project name",
    accessor: "project.name",
    Filter: ColumnFilter,
    sticky: "left"
  }
];
