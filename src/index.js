import { RenderBlock } from "./lib/renderBlocksmodule.js";
import "./styles.scss";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<div id="app" word="world"></div>`;

//Define APP Block
const app = new RenderBlock({
  target: "#app",
  info: {word: 'Hello'},
  render: (block) => {
    return `<h1>${block.info.word} ${block.props.word}</h1><button>Click Me</button>
    <header></header>
    <main></main>
    <footer></footer>`
  },
  after: (block) => {
    document.querySelector('button').addEventListener('click', () => {
      block.updateInfo('word', 'Goodbye')
    })
    Header()
    Main()
    Footer()
  }

})





