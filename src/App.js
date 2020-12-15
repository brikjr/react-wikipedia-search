import React from "react";
import Search from "./components/Search" ;

//pass prop to accordion
const items = [
  {
    title: "What 's React?",
    content:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    title: "How does React Work?",
    content:
      "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
  },
  {
    title: "React Directly in HTML",
    content:
      "Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers."
  },
];

const App = () => {
  return <Search />
};

export default App;
