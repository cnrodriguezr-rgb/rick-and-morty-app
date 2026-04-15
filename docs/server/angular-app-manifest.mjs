
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
    'index.csr.html': {size: 459, hash: '6046c06a4d9898ebcf09618798506668f3fa46e9c074c0e6de6ab8ddda950285', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: '5b82f42d555f71399d333d22992b18c6933ac91dacff585ea1d386970d4d78df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21581, hash: 'a317e3870eda3fa2e772b9788c51eba3d9d2eebcefe10a968f1863b6ef838db0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
