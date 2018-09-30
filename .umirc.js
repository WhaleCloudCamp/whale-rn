export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true,
        antd: true
      }
    ]
  ],
  alias: {
    "react-native$": "react-native-web"
  },
  history: 'hash',
  routes:[
    {
        path: '/',
        component: '../layouts',
        routes: [
        { path: '/', redirect: '/modal' },
          { path: '/modal', component: '../../rn/components/Alert/usage' },
        ],
    }
  ]
};
