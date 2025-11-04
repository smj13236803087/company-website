import comp from "/Applications/vuepress-starter/docs/.vuepress/.temp/pages/products.html.vue"
const data = JSON.parse("{\"path\":\"/products.html\",\"title\":\"产品与服务\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"核心产品\",\"slug\":\"核心产品\",\"link\":\"#核心产品\",\"children\":[{\"level\":3,\"title\":\"产品A - 企业管理系统\",\"slug\":\"产品a-企业管理系统\",\"link\":\"#产品a-企业管理系统\",\"children\":[]},{\"level\":3,\"title\":\"产品B - 智能营销平台\",\"slug\":\"产品b-智能营销平台\",\"link\":\"#产品b-智能营销平台\",\"children\":[]},{\"level\":3,\"title\":\"产品C - 数据分析工具\",\"slug\":\"产品c-数据分析工具\",\"link\":\"#产品c-数据分析工具\",\"children\":[]}]},{\"level\":2,\"title\":\"专业服务\",\"slug\":\"专业服务\",\"link\":\"#专业服务\",\"children\":[{\"level\":3,\"title\":\"技术咨询服务\",\"slug\":\"技术咨询服务\",\"link\":\"#技术咨询服务\",\"children\":[]},{\"level\":3,\"title\":\"定制开发服务\",\"slug\":\"定制开发服务\",\"link\":\"#定制开发服务\",\"children\":[]},{\"level\":3,\"title\":\"培训服务\",\"slug\":\"培训服务\",\"link\":\"#培训服务\",\"children\":[]},{\"level\":3,\"title\":\"运维支持\",\"slug\":\"运维支持\",\"link\":\"#运维支持\",\"children\":[]}]},{\"level\":2,\"title\":\"服务流程\",\"slug\":\"服务流程\",\"link\":\"#服务流程\",\"children\":[]},{\"level\":2,\"title\":\"成功案例\",\"slug\":\"成功案例\",\"link\":\"#成功案例\",\"children\":[{\"level\":3,\"title\":\"案例1：某大型零售企业\",\"slug\":\"案例1-某大型零售企业\",\"link\":\"#案例1-某大型零售企业\",\"children\":[]},{\"level\":3,\"title\":\"案例2：某互联网公司\",\"slug\":\"案例2-某互联网公司\",\"link\":\"#案例2-某互联网公司\",\"children\":[]}]},{\"level\":2,\"title\":\"免费试用\",\"slug\":\"免费试用\",\"link\":\"#免费试用\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"products.md\"}")
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
