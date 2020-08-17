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
  });
}