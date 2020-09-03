import { RenderBlock } from "../lib/renderBlocksmodule.js";

//Define APP Block

export const Header = () => {
  new RenderBlock({
    target: "header",
    render: (block) => {
      return `<h1>I am the Header</h1>`;
    },
  });
};
