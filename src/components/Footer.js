import { RenderBlock } from "../lib/renderBlocksmodule.js";

//Define APP Block
export const Footer = () => {
  new RenderBlock({
    target: "footer",
    render: (block) => {
      return `<h1>I am the Footer</h1>`;
    },
  });
};
