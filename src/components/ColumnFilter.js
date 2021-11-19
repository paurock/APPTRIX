import React from "react";
import { useDispatch, connect } from "react-redux";
import { SET_PROJECT_QUERY_NAME } from "../state/actions/types";

export const ColumnFilter = ({ searchNameQuery }) => {
  const dispatch = useDispatch();
  const sendQueryToStore = (e) =>
    dispatch({
      type: SET_PROJECT_QUERY_NAME,
      payload: e.target.value || null,
    });

  return (
    <span>
      <input value={searchNameQuery} onChange={(e) => sendQueryToStore(e)} />
    </span>
  );
};

const mapStateToProps = (store) => ({
  searchNameQuery: store.searchNameQuery,
});

connect(mapStateToProps)(ColumnFilter);
