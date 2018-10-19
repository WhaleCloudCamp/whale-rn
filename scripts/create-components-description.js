/**
 * 生成组件描述文件
 */

/**
 * npm run start-s
 * 打开浏览器，会自动下载文件 components-description.json
 */

import checkPropTypes from "check-prop-types";

const context = require.context(
  "../rn/components",
  true,
  /^\.\/[a-z, A-Z]+\/index.js$/
);

function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const keys = context.keys();

function extractPropType(propTypes, propName) {
  let fakeProps = {};
  fakeProps[propName] = "dummy";
  let error = checkPropTypes(
    { [propName]: propTypes[propName] },
    fakeProps,
    "prop"
  );
  if (!error) {
    return "string";
  } else {
    const EXPECTED_TYPE_PATTERN = /expected `?(.*)`?\./i;
    const matches = error.toString().match(EXPECTED_TYPE_PATTERN);
    if (matches && matches.length > 1) return matches[1].replace(/`/, "");
    if (error.toString().includes("flexDirection")) return "style";
    else return "unknown";
  }
}

function extractPropIsRequired(propTypes, propName) {
  let fakeProps = {};
  fakeProps[propName] = null;
  let error = checkPropTypes(propTypes, fakeProps);
  return !!error;
}

function extractPropTypes(propTypes) {
  let propNames = Object.keys(propTypes);
  const temp = {};
  propNames.forEach(propName => {
    temp[propName] = {
      // name: propName,
      type: extractPropType(propTypes, propName),
      isRequired: extractPropIsRequired(propTypes, propName)
    };
  });
  return temp;
}

function handlePropTypes(propTypes) {
  if (!propTypes) return null;
  return extractPropTypes(propTypes);
}

function handleComponent(component, name) {
  const { propTypes, defaultProps } = component;
  const propTypesMap = handlePropTypes(propTypes);
  const result = {
    id: `${name}-${new Date().getTime()}`,
    type: name,
    props: {},
    propTypes: propTypesMap,
    defaultProps,
    style: {}
  };
  return result;
}

const results = [];

keys.forEach(item => {
  const name = item.split("/")[1];
  const component = require(`../rn/components/${item.slice(2)}`).default;
  results.push(handleComponent(component, name));
});
// console.log(results);
download("components-description.json", JSON.stringify(results));
