import comp from "/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"lang\":\"zh-CN\",\"title\":\"首页\",\"description\":\"目录\"},\"headers\":[{\"level\":3,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[]}],\"git\":{\"updatedTime\":1717395491000,\"contributors\":[{\"name\":\"gangqiang duan\",\"email\":\"duangangqiang@users.noreply.github.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
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
