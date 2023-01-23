<script lang="ts">
    import { attrsToStyle } from "../transformer/attrsToStyle";

    export let node: any;
</script>

<blockquote style={attrsToStyle(node.attrs)}>
    <slot></slot>
</blockquote>