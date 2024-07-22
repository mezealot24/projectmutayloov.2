import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const order = [
  {
    numberId: "R1200",
    date: "2021-01-01",
    status: "Delivered",
    price: "200.00",
  },
  {
    numberId: "N9900",
    date: "2021-01-01",
    status: "Completed",
    price: "200.00",
  },
];

const Order = () => {
  return (
    <section className="w-full grid gap-4">
      <h4 className="font-bold">Order History</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number Id</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.numberId}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Order;
