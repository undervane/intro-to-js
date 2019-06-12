module.exports = {
  title: "Intro to JS",
  description: "A pragmatic approach to JS",
  dest: "docs",
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      "/": [
        "",
        "variables"
      ]
    }
  }
};
