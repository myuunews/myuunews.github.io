import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, {
  router,
  head,
  isClient
}) {
  Vue.component("Layout", DefaultLayout);
  head.script.push({
    src: "https://platform.twitter.com/widgets.js",
    async: true
  })
  head.htmlAttrs = {
    lang: 'ja',
    prefix: 'og: http://ogp.me/ns#'
  }
  head.meta.push({
    property: 'og:url',
    content: 'https://myuunews.github.io'
  }, {
    property: 'og:title',
    content: 'myuunews - @myuunews'
  }, {
    property: 'og:description',
    content: '81プロデュース所属の声優・高木美佑さんの情報を集約するための非公式Twitterアカウントです。'
  }, {
    property: 'og:image',
    content: 'https://myuunews.github.io' + require('~/favicon.png')
  }, {
    name: 'twitter:card',
    content: 'summary'
  }, {
    name: 'twitter:site',
    content: '@myuunews'
  }, {
    name: 'twitter:creator',
    content: '@_theoria'
  })
}