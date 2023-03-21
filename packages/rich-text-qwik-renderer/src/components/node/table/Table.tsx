import { component$ } from "@builder.io/qwik";
import { attrsToStyle } from "../../transformer/attrsToStyle";
import { headingCreator } from "../heading/Heading";
import Text from "../text/Text";

interface ITable {
  node: any;
}

export default component$<ITable>(({ node }) => (
  <table style={{ borderCollapse: "collapse" }}>
    <tbody>
      {node.content.map((row: any, rowIndex: number) => (
        <tr key={rowIndex}>
          {row.content.map((cell: any, cellIndex: number) =>
            cell.type === "tableHeader" ? (
              <th
                key={cellIndex}
                {...cell.attrs}
                style={{
                  border: "1px solid black",
                  minWidth: "100px",
                }}
              >
                {cell.content.map((cellContent: any, contentKey: number) =>
                  cellContent.type === "paragraph" ? (
                    <p style={attrsToStyle(cellContent.attrs)} key={contentKey}>
                      <Text nodesArr={cellContent.content} />
                    </p>
                  ) : (
                    headingCreator({
                      level: cellContent.attrs.level,
                      attrs: cellContent.attrs,
                      nodesArr: cellContent.content,
                    })
                  )
                )}
              </th>
            ) : (
              <td
                key={cellIndex}
                {...cell.attrs}
                style={{ border: "1px solid black" }}
              >
                {cell.content.map((cellContent: any, contentKey: number) =>
                  cellContent.type === "paragraph" ? (
                    <p style={attrsToStyle(cellContent.attrs)} key={contentKey}>
                      <Text nodesArr={cellContent.content} />
                    </p>
                  ) : (
                    headingCreator({
                      level: cellContent.attrs.level,
                      attrs: cellContent.attrs,
                      nodesArr: cellContent.content,
                    })
                  )
                )}
              </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </table>
));
