      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[4,5,2,3]}},"timeline":{"/":{"path":"/timeline/","indexes":[2,3,5,4,0,1]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      