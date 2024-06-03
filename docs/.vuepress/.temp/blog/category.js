export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"网络":{"path":"/category/%E7%BD%91%E7%BB%9C/","indexes":[0,1]},"安全":{"path":"/category/%E5%AE%89%E5%85%A8/","indexes":[2,3]}}}},"tag":{"/":{"path":"/tag/","map":{"CDN":{"path":"/tag/cdn/","indexes":[1]},"OSI模型":{"path":"/tag/osi%E6%A8%A1%E5%9E%8B/","indexes":[0]},"网络协议":{"path":"/tag/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/","indexes":[0]},"XSS":{"path":"/tag/xss/","indexes":[3]},"CSP":{"path":"/tag/csp/","indexes":[3]},"dompurify":{"path":"/tag/dompurify/","indexes":[3]},"网络劫持":{"path":"/tag/%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81/","indexes":[2]},"ARP劫持":{"path":"/tag/arp%E5%8A%AB%E6%8C%81/","indexes":[2]},"DNS劫持":{"path":"/tag/dns%E5%8A%AB%E6%8C%81/","indexes":[2]},"HTTP劫持":{"path":"/tag/http%E5%8A%AB%E6%8C%81/","indexes":[2]},"BGP劫持":{"path":"/tag/bgp%E5%8A%AB%E6%8C%81/","indexes":[2]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

