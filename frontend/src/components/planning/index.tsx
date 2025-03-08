"use client";

import React from "react";

const dummyData = [
  {
    store: "Store A",
    sku: "SKU123",
    week1SalesUnits: 50,
    week1SalesDollars: 500,
    week1GMDollars: 150,
    week1GMPercent: "30%",
    week2SalesUnits: 60,
    week2SalesDollars: 600,
    week2GMDollars: 180,
    week2GMPercent: "30%",
  },
  {
    store: "Store B",
    sku: "SKU124",
    week1SalesUnits: 40,
    week1SalesDollars: 400,
    week1GMDollars: 120,
    week1GMPercent: "30%",
    week2SalesUnits: 55,
    week2SalesDollars: 550,
    week2GMDollars: 165,
    week2GMPercent: "30%",
  },
  {
    store: "Store C",
    sku: "SKU125",
    week1SalesUnits: 65,
    week1SalesDollars: 650,
    week1GMDollars: 200,
    week1GMPercent: "30.7%",
    week2SalesUnits: 70,
    week2SalesDollars: 700,
    week2GMDollars: 210,
    week2GMPercent: "30%",
  },
  {
    store: "Store D",
    sku: "SKU126",
    week1SalesUnits: 30,
    week1SalesDollars: 300,
    week1GMDollars: 90,
    week1GMPercent: "30%",
    week2SalesUnits: 35,
    week2SalesDollars: 350,
    week2GMDollars: 105,
    week2GMPercent: "30%",
  },
  {
    store: "Store E",
    sku: "SKU127",
    week1SalesUnits: 90,
    week1SalesDollars: 900,
    week1GMDollars: 270,
    week1GMPercent: "30%",
    week2SalesUnits: 100,
    week2SalesDollars: 1000,
    week2GMDollars: 300,
    week2GMPercent: "30%",
  },
  {
    store: "Store F",
    sku: "SKU128",
    week1SalesUnits: 20,
    week1SalesDollars: 200,
    week1GMDollars: 60,
    week1GMPercent: "30%",
    week2SalesUnits: 25,
    week2SalesDollars: 250,
    week2GMDollars: 75,
    week2GMPercent: "30%",
  },
  {
    store: "Store G",
    sku: "SKU129",
    week1SalesUnits: 75,
    week1SalesDollars: 750,
    week1GMDollars: 225,
    week1GMPercent: "30%",
    week2SalesUnits: 85,
    week2SalesDollars: 850,
    week2GMDollars: 255,
    week2GMPercent: "30%",
  },
  {
    store: "Store H",
    sku: "SKU130",
    week1SalesUnits: 55,
    week1SalesDollars: 550,
    week1GMDollars: 165,
    week1GMPercent: "30%",
    week2SalesUnits: 60,
    week2SalesDollars: 600,
    week2GMDollars: 180,
    week2GMPercent: "30%",
  },
  {
    store: "Store I",
    sku: "SKU131",
    week1SalesUnits: 80,
    week1SalesDollars: 800,
    week1GMDollars: 240,
    week1GMPercent: "30%",
    week2SalesUnits: 90,
    week2SalesDollars: 900,
    week2GMDollars: 270,
    week2GMPercent: "30%",
  },
  {
    store: "Store J",
    sku: "SKU132",
    week1SalesUnits: 95,
    week1SalesDollars: 950,
    week1GMDollars: 285,
    week1GMPercent: "30%",
    week2SalesUnits: 105,
    week2SalesDollars: 1050,
    week2GMDollars: 315,
    week2GMPercent: "30%",
  },
];

// Function to render table rows
const renderRowData = () => {
  return dummyData.map((item, index) => (
    <tr key={index} className="text-center border border-gray-300">
      <td className="border border-gray-300 px-2 md:px-4 py-2">{item.store}</td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">{item.sku}</td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week1SalesUnits}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week1SalesDollars}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week1GMDollars}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week1GMPercent}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week2SalesUnits}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week2SalesDollars}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week2GMDollars}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2">
        {item.week2GMPercent}
      </td>
    </tr>
  ));
};

const TableComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200 text-center text-sm md:text-base">
              <th
                className="border border-gray-300 px-4 py-2 w-1/5 text-center"
                rowSpan={3}
              >
                Store
              </th>
              <th
                className="border border-gray-300 px-4 py-2 w-1/5 text-center"
                rowSpan={3}
              >
                SKU
              </th>
              <th
                className="border border-gray-300 px-4 py-2 w-3/5 text-center"
                colSpan={8}
              >
                Feb
              </th>
            </tr>
            <tr className="bg-gray-100 text-center text-sm md:text-base">
              <th
                className="border border-gray-300 px-4 py-2 w-1/2 text-center"
                colSpan={4}
              >
                Week 01
              </th>
              <th
                className="border border-gray-300 px-4 py-2 w-1/2 text-center"
                colSpan={4}
              >
                Week 02
              </th>
            </tr>
            <tr className="bg-gray-50 text-center text-xs md:text-sm">
              <th className="border border-gray-300 px-4 py-2">Sales Units</th>
              <th className="border border-gray-300 px-4 py-2">
                Sales Dollars
              </th>
              <th className="border border-gray-300 px-4 py-2">GM Dollars</th>
              <th className="border border-gray-300 px-4 py-2">GM Percent</th>
              <th className="border border-gray-300 px-4 py-2">Sales Units</th>
              <th className="border border-gray-300 px-4 py-2">
                Sales Dollars
              </th>
              <th className="border border-gray-300 px-4 py-2">GM Dollars</th>
              <th className="border border-gray-300 px-4 py-2">GM Percent</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.length > 0 ? (
              renderRowData()
            ) : (
              <tr>
                <td
                  className="border border-gray-300 px-4 py-4 text-center"
                  colSpan={10}
                >
                  No records were found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
