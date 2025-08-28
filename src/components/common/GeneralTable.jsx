import React, { useState } from "react";
import Button from "../common/Button";
import { Download, Plus, Search } from "lucide-react";

const GeneralTable = ({
  tableTitle,
  headers,
  rows,
  renderRows,
  buttonTitle,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium dark:text-light-a0  ">
          <h2>{tableTitle}</h2>
        </div>
        <div>
          <Button title={`${buttonTitle}`} icon={Plus} />
        </div>
      </div>

      <div className="bg-surface-a10/80 rounded-lg overflow-hidden p-4 dark:bg-surface-dark-a10">
        <div className="overflow-x-auto">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <div className="mb-4 flex max-w-1/2 items-center gap-2">
              <Search className="w-5 h-5 text-dark-a0/50 dark:text-surface-a50" />
              <input
                type="search"
                name="search"
                id="search"
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-1.5 border border-surface-a50 rounded-md dark:bg-surface-dark-a20 dark:text-light-a0"
                placeholder="Search..."
              />
            </div>
            <div>
              <Button title={"Export"} icon={Download} />
            </div>
          </div>
          <table className="min-w-full divide-y divide-surface-a20">
            <thead className="bg-surface-a20 dark:bg-surface-dark-a20">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-sm font-bold text-dark-a0 uppercase tracking-wider dark:text-light-a0"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-light-a0 divide-y divide-surface-a20 dark:bg-surface-dark-a20 dark:divide-surface-dark-a30">
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="px-6 py-4 text-center text-dark-a0/70 dark:text-light-a0/70"
                  >
                    No records available
                  </td>
                </tr>
              ) : filteredRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className="px-6 py-4 text-center text-dark-a0/70 dark:text-light-a0/70"
                  >
                    No matching records found
                  </td>
                </tr>
              ) : (
                filteredRows.map((row, index) => renderRows(row, index))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneralTable;
