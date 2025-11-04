import comp from "/Applications/vuepress-starter/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"联系我们\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"联系方式\",\"slug\":\"联系方式\",\"link\":\"#联系方式\",\"children\":[{\"level\":3,\"title\":\"公司地址\",\"slug\":\"公司地址\",\"link\":\"#公司地址\",\"children\":[]},{\"level\":3,\"title\":\"联系电话\",\"slug\":\"联系电话\",\"link\":\"#联系电话\",\"children\":[]},{\"level\":3,\"title\":\"电子邮箱\",\"slug\":\"电子邮箱\",\"link\":\"#电子邮箱\",\"children\":[]},{\"level\":3,\"title\":\"工作时间\",\"slug\":\"工作时间\",\"link\":\"#工作时间\",\"children\":[]}]},{\"level\":2,\"title\":\"在线咨询\",\"slug\":\"在线咨询\",\"link\":\"#在线咨询\",\"children\":[]},{\"level\":2,\"title\":\"社交媒体\",\"slug\":\"社交媒体\",\"link\":\"#社交媒体\",\"children\":[]},{\"level\":2,\"title\":\"商务合作\",\"slug\":\"商务合作\",\"link\":\"#商务合作\",\"children\":[]},{\"level\":2,\"title\":\"加入我们\",\"slug\":\"加入我们\",\"link\":\"#加入我们\",\"children\":[]},{\"level\":2,\"title\":\"地图位置\",\"slug\":\"地图位置\",\"link\":\"#地图位置\",\"children\":[{\"level\":3,\"title\":\"常见问题\",\"slug\":\"常见问题\",\"link\":\"#常见问题\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"contact.md\"}")
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
