import { RenderBlock } from "../lib/renderBlocksmodule.js";

//Define APP Block
export const Main = () => {
  new RenderBlock({
    target: "main",
    render: (block) => {
      return `<h1>I am the Main component</h1>`;
    },
  });
};
