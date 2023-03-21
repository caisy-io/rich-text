import { component$ } from "@builder.io/qwik";
import Text from "../text/Text";

interface IOrdererdList {
  node: any;
}

export default component$<IOrdererdList>(({ node }) => {
  return (
    <ul>
      {node.content.map((liItem: any, liIndex: number) => (
        <li key={liIndex}>
          <Text nodesArr={liItem?.content?.[0]?.content} />
        </li>
      ))}
    </ul>
  );
});
