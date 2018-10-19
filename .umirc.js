const pages = [
  { path: "/", redirect: "/ActionSheet" },
  {
    path: "/ActionSheet",
    component: "../../rn/components/ActionSheet/usage/index.js"
  },
  {
    path: "/ActivityIndication",
    component: "../../rn/components/ActivityIndication/usage/index.js"
  },
  { path: "/Alert", component: "../../rn/components/Alert/usage/index.js" },
  {
    path: "/AreaSelect",
    component: "../../rn/components/AreaSelect/usage/index.js"
  },
  { path: "/Badge", component: "../../rn/components/Badge/usage/index.js" },
  { path: "/Button", component: "../../rn/components/Button/usage/index.js" },
  {
    path: "/CheckBox",
    component: "../../rn/components/CheckBox/usage/index.js"
  },
  {
    path: "/ImagePicker",
    component: "../../rn/components/ImagePicker/usage/index.js"
  },
  { path: "/Input", component: "../../rn/components/Input/usage/index.js" },
  {
    path: "/InputItem",
    component: "../../rn/components/InputItem/usage/index.js"
  },
  { path: "/Label", component: "../../rn/components/Label/usage/index.js" },
  { path: "/List", component: "../../rn/components/List/usage/index.js" },
  {
    path: "/MenuPicker",
    component: "../../rn/components/MenuPicker/usage/index.js"
  },
  { path: "/Modal", component: "../../rn/components/Modal/usage/index.js" },
  { path: "/NavBar", component: "../../rn/components/NavBar/usage/index.js" },
  {
    path: "/NoticeBar",
    component: "../../rn/components/NoticeBar/usage/index.js"
  },
  {
    path: "/Pagination",
    component: "../../rn/components/Pagination/usage/index.js"
  },
  {
    path: "/Progress",
    component: "../../rn/components/Progress/usage/index.js"
  },
  { path: "/Prompt", component: "../../rn/components/Prompt/usage/index.js" },
  { path: "/Radio", component: "../../rn/components/Radio/usage/index.js" },
  {
    path: "/SearchBar",
    component: "../../rn/components/SearchBar/usage/index.js"
  },
  { path: "/Slider", component: "../../rn/components/Slider/usage/index.js" },
  { path: "/Stepper", component: "../../rn/components/Stepper/usage/index.js" },
  { path: "/Switch", component: "../../rn/components/Switch/usage/index.js" },
  { path: "/TabBar", component: "../../rn/components/TabBar/usage/index.js" },
  { path: "/Tabs", component: "../../rn/components/Tabs/usage/index.js" },
  { path: "/Tag", component: "../../rn/components/Tag/usage/index.js" },
  {
    path: "/TextareaItem",
    component: "../../rn/components/TextareaItem/usage/index.js"
  },
  { path: "/Toast", component: "../../rn/components/Toast/usage/index.js" }
];

export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true,
        antd: true,
        hd: true
      }
    ]
  ],
  alias: {
    "react-native$": "react-native-web"
  },
  history: "hash",publicPath:"",base:"",
  routes: [
    {
      path: "/",
      component: "../layouts",
      routes: pages
    }
  ]
};
