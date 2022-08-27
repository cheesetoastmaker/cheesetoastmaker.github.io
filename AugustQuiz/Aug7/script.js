import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function HomeHeader() {
  const textContainerRef = React.useRef();

  let colors = ["lightgreen", "#FFD700", "#FF6103", "#ADD8E6"];
  React.useEffect(() => {var _document$querySelect;
    const childNodesOfTextContainer = (_document$querySelect = document.querySelector(
    ".main-text-container")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.
    childNodes;

    let activeChildrensIndex = [];
    let allChildrens = [];
    childNodesOfTextContainer === null || childNodesOfTextContainer === void 0 ? void 0 : childNodesOfTextContainer.forEach((node, index) => {
      if (node.nodeName === "H1") {
        allChildrens = [...allChildrens, ...node.children];
      }
    });

    function getRandomChildrens(limit) {
      let i = 0;

      while (i < limit) {
        const randomChildIndex = pickARndomChildrenIndex(
        activeChildrensIndex,
        allChildrens.length);


        const randomChild = allChildrens[randomChildIndex];
        const randomColorIndex = Math.floor(Math.random() * 10) % colors.length;

        randomChild.style.color = `${colors[randomColorIndex]}`;
        activeChildrensIndex.push(randomChildIndex);
        i++;
      }
    }

    function pickARndomChildrenIndex(activeChildrensIndex, totalChildrens) {
      const randomIndex = Math.floor(Math.random() * 100) % totalChildrens;
      return activeChildrensIndex.includes(randomIndex) ?
      pickARndomChildrenIndex(activeChildrensIndex, totalChildrens) :
      randomIndex;
    }

    const interId = setInterval(() => {
      //* remove the styles for activated childrens
      allChildrens.forEach((childNode, index) => {
        if (activeChildrensIndex.includes(index)) {
          childNode.style.color = "#ffffffe1";
        }
      });

      //* clear all the array

      activeChildrensIndex.length = 0;
      const getARandomLimit =
      Math.floor(Math.random() * 10) % (allChildrens.length - 5) + 1;

      getRandomChildrens(getARandomLimit);
    }, 1450);
    return () => clearInterval(interId);
  });
  return /*#__PURE__*/React.createElement(
  React.Fragment,
  null,
  /*#__PURE__*/React.createElement(
  "section",
  {
    className: "home-section-1" },

  /*#__PURE__*/React.createElement(
  "div",
  {
    className: "main-text-container",
    ref: textContainerRef },

  /*#__PURE__*/React.createElement(
  "h1",
  null,
  /*#__PURE__*/React.createElement("span", null, "U"),
  /*#__PURE__*/React.createElement("span", null, "P"),
  /*#__PURE__*/React.createElement("span", null, "S"),
  /*#__PURE__*/React.createElement("span", null, "C")),

  /*#__PURE__*/React.createElement(
  "h1",
  null,
  /*#__PURE__*/React.createElement("span", null, "N"),
  /*#__PURE__*/React.createElement("span", null, "E"),
  /*#__PURE__*/React.createElement("span", null, "T")),

  /*#__PURE__*/React.createElement(
  "h1",
  null,
  /*#__PURE__*/React.createElement("span", null, "w"),
  /*#__PURE__*/React.createElement("span", null, "o"),
  /*#__PURE__*/React.createElement("span", null, "r"),
  /*#__PURE__*/React.createElement("span", null, "l"),
  /*#__PURE__*/React.createElement("span", null, "d")),

  /*#__PURE__*/React.createElement(
  "p",
  null,
  "Explore a vast list of Anime and Characters. Comes with full details on them."))));




}
const container = document.getElementById("page");
ReactDOM.render(React.createElement(HomeHeader, null), container); // Initial render