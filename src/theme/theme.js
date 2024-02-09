/* eslint-disable no-unused-vars */
const green = "#2ecc71";
const blue = "#3498db";
const yellow = "#f1c40f";
const red = "#e74c3c";
const darkBlue = "#7a495e";
const midnightBlue = "#2c6e50";
const lightWhite = "#ecf0f1";
const silver = "#bdc3c7";

const boxSize = "900px";

const bgColor = "orange";
const textColor = "midnightBlue";
const bodyColor = "white";
const linkColor = "blue";
const linkColorHover = "darkBlue";

const lightTheme = {
  colors: {
    bgColor,
    textColor,
    bodyColor,
    linkColor,
    linkColorHover,
    silver,
    darkBlue,
    red,
    yellow,
    green,
    blue
  },
  sizes: {
    boxSize
  }
};

const darkTheme = JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bodyColor = midnightBlue;
darkTheme.colors.bgColor = darkBlue;
darkTheme.colors.textColor = lightWhite;

export { darkTheme, lightTheme };
