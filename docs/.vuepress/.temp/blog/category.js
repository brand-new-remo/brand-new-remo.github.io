export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"History":{"path":"/category/history/","indexes":[0,1]},"安全":{"path":"/category/%E5%AE%89%E5%85%A8/","indexes":[2]},"CategoryA":{"path":"/category/categorya/","indexes":[3]},"CategoryC":{"path":"/category/categoryc/","indexes":[4,5]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[1]},"WWII":{"path":"/tag/wwii/","indexes":[0]},"网络劫持":{"path":"/tag/%E7%BD%91%E7%BB%9C%E5%8A%AB%E6%8C%81/","indexes":[2]},"ARP劫持":{"path":"/tag/arp%E5%8A%AB%E6%8C%81/","indexes":[2]},"DNS劫持":{"path":"/tag/dns%E5%8A%AB%E6%8C%81/","indexes":[2]},"HTTP劫持":{"path":"/tag/http%E5%8A%AB%E6%8C%81/","indexes":[2]},"BGP劫持":{"path":"/tag/bgp%E5%8A%AB%E6%8C%81/","indexes":[2]},"tag A":{"path":"/tag/tag-a/","indexes":[3]},"tag B":{"path":"/tag/tag-b/","indexes":[3]},"tag E":{"path":"/tag/tag-e/","indexes":[4,5]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

