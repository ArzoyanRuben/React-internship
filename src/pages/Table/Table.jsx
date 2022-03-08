import React from "react";
import { tableDataUrl } from "../../helpers/API";
import useFetch from "./../../hooks/useFetch";
import { Loader } from './../../components/Loader/Loader';
import '../../App.css';

export const Table = ({ cols, bordered, hoverable, striped, isDark }) => {
  const { data, loading, error } = useFetch(tableDataUrl);
  return (
    <>
      {loading && <Loader loading={loading} />}
      <div className="table-responsive">
        <table
          className={`table ${
            bordered ? "table-bordered" : "table-borderless"
          } ${hoverable && "table-hover"} ${striped && "table-striped"} ${
            isDark && "table-dark"
          }`}
        >
          <thead>
            <tr>
                <th>disclosure_year</th>
                <th>disclosure_date</th>
                <th>transaction_date</th>
                <th>owner</th>
                <th>ticker</th>
                <th>asset_description</th>
                <th>type</th>
                <th>amount</th>
                <th>representative</th>
                <th>district</th>
                <th>ptr_link</th>
                <th>cap_gains_over_200_usd</th>

            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                  <td>{(item.disclosure_year)}</td>
                  <td>{(item.disclosure_date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
