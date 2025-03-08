"use client";

import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyData = [
  { srNo: 1, store: "Store A", city: "New York", state: "New York" },
  { srNo: 2, store: "Store B", city: "Los Angeles", state: "California" },
  { srNo: 3, store: "Store C", city: "Chicago", state: "Illinois" },
  { srNo: 4, store: "Store D", city: "Houston", state: "Texas" },
  { srNo: 5, store: "Store E", city: "Phoenix", state: "Arizona" },
  { srNo: 6, store: "Store F", city: "Philadelphia", state: "Pennsylvania" },
  { srNo: 7, store: "Store G", city: "San Antonio", state: "Texas" },
  { srNo: 8, store: "Store H", city: "San Diego", state: "California" },
  { srNo: 9, store: "Store I", city: "Dallas", state: "Texas" },
  { srNo: 10, store: "Store J", city: "San Jose", state: "California" },
];

const SimpleTable = () => {
  const handleEdit = (srNo) => {
    alert(`Edit record ${srNo}`);
  };

  const handleDelete = (srNo) => {
    alert(`Delete record ${srNo}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <thead>
            <tr className="bg-light text-left">
              <th className="px-4 py-2">Sr No.</th>
              <th className="px-4 py-2">Store</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.length > 0 ? (
              dummyData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.srNo}</td>
                  <td className="px-4 py-2">{item.store}</td>
                  <td className="px-4 py-2">{item.city}</td>
                  <td className="px-4 py-2">{item.state}</td>
                  <td className="px-4 py-2">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        size="sm"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEdit(item.srNo)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(item.srNo)}
                          className="text-danger"
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-4 text-center" colSpan={5}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;
