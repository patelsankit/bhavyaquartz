"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from "@nextui-org/react";
import axios from "axios";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "city", label: "City" },
];

const rows = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
  { id: 3, name: "Bob Johnson", age: 40, city: "Chicago" },
  { id: 4, name: "Alice Brown", age: 35, city: "Houston" },
];
export default function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error("Error fetching users:", error));
  // }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  return (
    <div className="max-w-[1024px] mx-auto flex flex-col px-5 gap-10 py-10">
      <Table aria-label="User table">
        <TableHeader>
          <TableColumn>Username</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>City</TableColumn>
          <TableColumn>Company</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address.city}</TableCell>
              <TableCell>{user.company.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {getKeyValue(row, column.key)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
