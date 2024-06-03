export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"归档文档1","author":"","date":"1998-01-01T00:00:00.000Z","category":["History"],"tag":["WWI"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"归档文档1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"归档文档2","author":"","date":"1998-01-02T00:00:00.000Z","category":["History"],"tag":["WWII"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"归档文档2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"网络劫持","author":"","date":"2024-06-03T00:00:00.000Z","category":["安全"],"tag":["网络劫持","ARP劫持","DNS劫持","HTTP劫持","BGP劫持"],"excerpt":"\n<p>网络劫持是一种网络攻击手段，攻击者通过各种方式拦截和篡改网络通信。以下是一些常见的网络劫持方式和解决方案：</p>\n<ol>\n<li><strong>ARP 劫持</strong>：\n<ul>\n<li>也被称为 ARP 欺骗或 ARP 欺诈，是一种网络攻击手段。攻击者通过伪造 ARP 消息，使网络中的设备误认为攻击者的 MAC 地址是某个 IP 地址的正确对应关系，从而将网络流量引向攻击者，实现中间人攻击。</li>\n<li>ARP 是地址解析协议（Address Resolution Protocol），它的作用是将网络层的 IP 地址映射到数据链路层的 MAC 地址。当一个设备需要向另一个设备发送数据时，它会先查看 ARP 缓存，看看目标 IP 地址对应的 MAC 地址是否已知。如果未知，它会发送一个 ARP 请求，询问网络中的设备谁拥有这个 IP 地址。拥有这个 IP 地址的设备会回复一个 ARP 响应，告诉发送者它的 MAC 地址。</li>\n<li>在 ARP 劫持攻击中，攻击者会发送伪造的 ARP 响应，告诉其他设备它拥有某个 IP 地址。例如，攻击者可以告诉网络中的设备，它拥有网关的 IP 地址。这样，当其他设备想要向网关发送数据时，数据实际上会被发送到攻击者。攻击者可以查看或修改这些数据，然后再将它们发送到真正的网关。这就是所谓的中间人攻击。</li>\n<li>防止 ARP 劫持的方法包括使用静态 ARP 表、使用 ARP 安全工具、使用私有 VLAN、使用动态 ARP 检查等。此外，对于重要的数据，应该使用加密和完整性检查，以防止攻击者查看或修改数据。</li>\n</ul>\n</li>\n<li><strong>DNS 劫持</strong>：攻击者篡改 DNS 服务器的响应，使得用户访问到错误的网站。解决方案是使用 DNSSEC（DNS 安全扩展）来验证 DNS 响应的完整性和真实性。</li>\n<li><strong>HTTP 劫持</strong>：攻击者拦截和篡改 HTTP 通信，例如插入恶意广告或者重定向到恶意网站。解决方案是使用 HTTPS 来加密通信，防止攻击者读取和修改数据。</li>\n<li><strong>BGP 劫持</strong>：\n<ul>\n<li>也被称为 IP 劫持，是一种网络攻击手段。攻击者通过伪造 BGP（边界网关协议）消息，使网络中的路由器误认为攻击者的网络是某个 IP 地址段的最佳路径，从而将网络流量引向攻击者，实现中间人攻击。</li>\n<li>BGP 是互联网的核心协议之一，它的作用是在自治系统（AS）之间交换路由信息。每个 AS 都有一个唯一的 AS 号，它可以是一个网络服务提供商，也可以是一个大型的企业或组织网络。当一个 AS 想要向另一个 AS 发送数据时，它会查看 BGP 表，看看目标 IP 地址的最佳路径是什么。</li>\n<li>在 BGP 劫持攻击中，攻击者会发送伪造的 BGP 更新消息，告诉其他 AS 它有一条到达某个 IP 地址段的最佳路径。这样，当其他 AS 想要向这个 IP 地址段发送数据时，数据实际上会被发送到攻击者。攻击者可以查看或修改这些数据，然后再将它们发送到真正的目的地。这就是所谓的中间人攻击。</li>\n<li>防止 BGP 劫持的方法包括使用 BGP 安全扩展（如 RPKI、BGPsec）、使用 IRR 数据库、使用 BGP 流量工程等。此外，对于重要的数据，应该使用加密和完整性检查，以防止攻击者查看或修改数据。</li>\n<li>请注意，BGP 劫持是一种严重的安全威胁，它可以影响全球的互联网流量。因此，网络服务提供商和大型的企业或组织网络都应该采取措施来防止 BGP 劫持。</li>\n</ul>\n</li>\n</ol>"},"title":"网络劫持"} }],
  ["/posts/article2.html", { loader: () => import(/* webpackChunkName: "posts_article2.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/article2.html.js"), meta: {"_blog":{"title":"文章2","author":"","date":"2022-01-02T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"文章2"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"Sticky Article","author":"","date":"2021-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"<p>A sticky article demo.</p>"},"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"Sticky Article with Higher Priority","author":"","date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"\n<p>Excerpt information which is added manually.</p>\n"},"title":"Sticky Article with Higher Priority"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/category/%E5%AE%89%E5%85%A8/", { loader: () => import(/* webpackChunkName: "category_安全_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/category/安全/index.html.js"), meta: {"title":"Category 安全"} }],
  ["/category/categorya/", { loader: () => import(/* webpackChunkName: "category_categorya_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/category/categorya/index.html.js"), meta: {"title":"Category CategoryA"} }],
  ["/category/categoryc/", { loader: () => import(/* webpackChunkName: "category_categoryc_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/category/categoryc/index.html.js"), meta: {"title":"Category CategoryC"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/wwi/", { loader: () => import(/* webpackChunkName: "tag_wwi_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/wwi/index.html.js"), meta: {"title":"Tag WWI"} }],
  ["/tag/wwii/", { loader: () => import(/* webpackChunkName: "tag_wwii_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/wwii/index.html.js"), meta: {"title":"Tag WWII"} }],
  ["/tag/%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81/", { loader: () => import(/* webpackChunkName: "tag_网络劫持_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/网络劫持/index.html.js"), meta: {"title":"Tag 网络劫持"} }],
  ["/tag/arp%E5%8A%AB%E6%8C%81/", { loader: () => import(/* webpackChunkName: "tag_arp劫持_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/arp劫持/index.html.js"), meta: {"title":"Tag ARP劫持"} }],
  ["/tag/dns%E5%8A%AB%E6%8C%81/", { loader: () => import(/* webpackChunkName: "tag_dns劫持_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/dns劫持/index.html.js"), meta: {"title":"Tag DNS劫持"} }],
  ["/tag/http%E5%8A%AB%E6%8C%81/", { loader: () => import(/* webpackChunkName: "tag_http劫持_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/http劫持/index.html.js"), meta: {"title":"Tag HTTP劫持"} }],
  ["/tag/bgp%E5%8A%AB%E6%8C%81/", { loader: () => import(/* webpackChunkName: "tag_bgp劫持_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/bgp劫持/index.html.js"), meta: {"title":"Tag BGP劫持"} }],
  ["/tag/tag-a/", { loader: () => import(/* webpackChunkName: "tag_tag-a_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/tag-a/index.html.js"), meta: {"title":"Tag tag A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "tag_tag-b_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "tag_tag-e_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/remo/brand-new-remo.github.io/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
