import comp from "/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1717395491000,\"contributors\":[{\"name\":\"gangqiang duan\",\"email\":\"duangangqiang@users.noreply.github.com\",\"commits\":2}]},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"<p>asdfas</p>\\n\"}")
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
