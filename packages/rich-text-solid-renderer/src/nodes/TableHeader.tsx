import { Component, JSXElement } from "solid-js";

const TableHeader: Component<{ children: JSXElement }> = ({ children }) => <th>{children}</th>;

export default TableHeader;
