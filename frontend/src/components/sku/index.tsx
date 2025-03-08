"use client";

import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const productData = [
  { sku: "SKU001", price: "$50", cost: "$30" },
  { sku: "SKU002", price: "$70", cost: "$40" },
  { sku: "SKU003", price: "$90", cost: "$60" },
  { sku: "SKU004", price: "$120", cost: "$80" },
  { sku: "SKU005", price: "$150", cost: "$100" },
];

const SkuTable = () => {
  const handleEdit = (sku) => {
    alert(`Edit record ${sku}`);
  };

  const handleDelete = (sku) => {
    alert(`Delete record ${sku}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table table-bordered">
          <thead>
            <tr className="bg-light text-left">
              <th className="px-4 py-2">SKU</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Cost</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productData.length > 0 ? (
              productData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.sku}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.cost}</td>
                  <td className="px-4 py-2">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        size="sm"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleEdit(item.sku)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDelete(item.sku)}
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
                <td className="px-4 py-4 text-center" colSpan={4}>
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

export default SkuTable;
