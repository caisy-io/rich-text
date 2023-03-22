import { component$ } from "@builder.io/qwik";
import TableCell from "./TableCell";

interface ITable {
  node: any;
}

export default component$<ITable>(({ node }) => (
  <table style={{ borderCollapse: "collapse" }}>
    <tbody>
      {node.content.map((row: any, rowIndex: number) => (
        <tr key={rowIndex}>
          {row.content.map((cell: any, cellIndex: number) => (
            <TableCell cell={cell} cellType={cell.type} key={cellIndex} />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
));
