
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
    'index.csr.html': {size: 459, hash: '39833c5c15ddd96f2aee3ecd7ed71526a26002b1a8b6d54d757b6ed05fbbd96d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: '5008a9e0469111becc4de6dcc0c1091283dbb9d52777f20f60274af1c82c73af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22332, hash: '5187c1f288181275058443b3542224e05b1f8fbd138aa92ff8d5f10018d03ba3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
