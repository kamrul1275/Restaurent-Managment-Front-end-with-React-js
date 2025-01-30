import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";
import DataTable from "datatables.net-bs5";

const OrderDetails = () => {
  const tableRef = useRef(null);
  const tableInstance = useRef(null);

  useEffect(() => {
    // Destroy existing instance if it exists
    if (tableInstance.current) {
      tableInstance.current.destroy();
      tableInstance.current = null;
    }

    // Initialize DataTable with explicit column definitions
    if (tableRef.current) {
      tableInstance.current = $(tableRef.current).DataTable({
        destroy: true,
        responsive: true,
        lengthChange: false,
        dom: "Bfrtip",
        columns: [
          { data: "name", title: "Name" },
          { data: "position", title: "Position" },
          { data: "office", title: "Office" },
          { data: "age", title: "Age" },
          { data: "startDate", title: "Start date" },
          { data: "salary", title: "Salary" },
        ],
        data: [
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "4647",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "36543",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "4647",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "3643",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "4237",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "4327",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "437",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "333",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "437",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "87",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "87",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "47",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          {
            name: "Airi Satou",
            position: "Accountant",
            office: "Tokyo",
            age: "33",
            startDate: "2008/11/28",
            salary: "$162,700",
          },
          {
            name: "Angelica Ramos",
            position: "Chief Executive Officer (CEO)",
            office: "London",
            age: "97",
            startDate: "2009/10/09",
            salary: "$1,200,000",
          },
          // Add more data objects as needed
        ],
        buttons: [
          {
            extend: "copy",
            className: "btn btn-outline-secondary",
          },
          {
            extend: "excel",
            className: "btn btn-outline-secondary",
          },
          {
            extend: "pdf",
            className: "btn btn-outline-secondary",
          },
          {
            extend: "print",
            className: "btn btn-outline-secondary",
          },
        ],
      });
    }

    // Cleanup function
    return () => {
      if (tableInstance.current) {
        tableInstance.current.destroy();
        tableInstance.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table
            id="example2"
            ref={tableRef}
            className="table table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
