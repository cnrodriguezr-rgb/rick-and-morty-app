
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rick-and-morty-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rick-and-morty-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 459, hash: '015099b687ffda254c32a1dfe0d341dd64b3631b550251ac6a7a83705cd876b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: 'cda4da8c0ad2c5d227ee21fac7271a3b4b8b89b2b830abd880fa51da404d0b5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26587, hash: '39decbbd6fe98cbde43f59a363b4413a39b971ad0483f2bf79214e7b86c761e0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
