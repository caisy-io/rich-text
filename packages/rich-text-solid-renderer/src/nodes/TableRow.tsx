import { Component, JSXElement } from "solid-js";

const TableRow: Component<{ children: JSXElement }> = ({ children }) => <tr>{children}</tr>;

export default TableRow;
