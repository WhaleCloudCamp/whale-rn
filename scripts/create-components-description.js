/**
 * 生成组件描述文件
 */

/**
 * npm run start-s
 * 打开浏览器，会自动下载文件 components-description.json
 */

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

function handlePropTypes(propTypes) {
  if (!propTypes) return null;
  const keyArray = Object.keys(propTypes);
  const temp = {};
  keyArray.forEach(key => {
    temp[key] = "";
  });
  return temp;
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

download("components-description.json", JSON.stringify(results));
