import comp from "/Applications/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"为什么选择我们\",\"slug\":\"为什么选择我们\",\"link\":\"#为什么选择我们\",\"children\":[{\"level\":3,\"title\":\"我们的优势\",\"slug\":\"我们的优势\",\"link\":\"#我们的优势\",\"children\":[]}]},{\"level\":2,\"title\":\"最新动态\",\"slug\":\"最新动态\",\"link\":\"#最新动态\",\"children\":[{\"level\":3,\"title\":\"2025年新产品发布\",\"slug\":\"_2025年新产品发布\",\"link\":\"#_2025年新产品发布\",\"children\":[]},{\"level\":3,\"title\":\"行业合作\",\"slug\":\"行业合作\",\"link\":\"#行业合作\",\"children\":[]}]}],\"git\":{\"updatedTime\":1762227248000,\"contributors\":[{\"name\":\"ShaoMaojia\",\"username\":\"ShaoMaojia\",\"email\":\"2873280173@qq.com\",\"commits\":1,\"url\":\"https://github.com/ShaoMaojia\"}],\"changelog\":[{\"hash\":\"e697a9ae42d8325e0b734031d1620d9d29db2137\",\"time\":1762227248000,\"email\":\"2873280173@qq.com\",\"author\":\"ShaoMaojia\",\"message\":\"init commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
