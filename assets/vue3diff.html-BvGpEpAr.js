import{_ as e,c as a,o as c,a as d}from"./app-BnBezLXt.js";const o={},l=d('<h1 id="vue3在diff阶段都优化了哪些" tabindex="-1"><a class="header-anchor" href="#vue3在diff阶段都优化了哪些"><span><strong>Vue3在diff阶段都优化了哪些</strong></span></a></h1><h2 id="静态提升" tabindex="-1"><a class="header-anchor" href="#静态提升"><span>静态提升</span></a></h2><p>在<code>模板编译时</code>，会将没有用到<code>动态变量</code>的<code>节点或属性(class、style这些元素属性)</code>进行<code>静态提升</code>，在进行render时，直接复用旧节点。而在<code>Vue2中</code>，无论元素是否使用了<code>动态变量</code>，每次更新都会<code>重新创建</code>，这也是为什么<code>Vue3</code>最好使用<code>template</code>而不是render函数，因为模板编译时会帮我们做优化；</p><h2 id="预字符串化" tabindex="-1"><a class="header-anchor" href="#预字符串化"><span>预字符串化</span></a></h2><p>当编译器遇到<code>大量的静态节点时</code>，会将这一整部分变成字符串，<code>减少VNode的创建</code>，渲染为<code>静态节点</code>，而在Vue2中，则会将这些节点一个个变成虚拟节点；</p><h2 id="缓存事件处理函数" tabindex="-1"><a class="header-anchor" href="#缓存事件处理函数"><span>缓存事件处理函数</span></a></h2><p>在Vue3中，会将dom元素绑定的事件进行<code>缓存</code>，在进行patch的时候会使用缓存中的事件处理函数；</p><h2 id="block-tree" tabindex="-1"><a class="header-anchor" href="#block-tree"><span>Block Tree</span></a></h2><p>在Vue3中，<code>Block</code>用于提取那些<code>动态属性</code>的节点，从而在进行更新时，可以精准的比较<code>Block中的内容</code>，只更新那些使用动态节点的节点；</p><h2 id="patchflags" tabindex="-1"><a class="header-anchor" href="#patchflags"><span>patchFlags</span></a></h2><p><code>patchFlags</code>是编译器生成的<code>优化提示</code>，它标记了节点的哪些属性是<code>动态的</code>，从而在进行更新时，精确的对某些属性进行更新；</p><h2 id="shapeflags" tabindex="-1"><a class="header-anchor" href="#shapeflags"><span>shapeFlags</span></a></h2><p><code>shapeFlags</code>也是一个标识，它标识了当前虚拟节点的类型，从而可以在进行diff时能够省去<code>类型判断</code>，对不同类型做不同的更新处理。</p><h2 id="快速路径和节点缓存" tabindex="-1"><a class="header-anchor" href="#快速路径和节点缓存"><span>快速路径和节点缓存</span></a></h2><p>Vue 3 在 diff 过程中使用了快速路径（fast path）和节点缓存机制，可以快速跳过不必要的比较和操作，提高了 diff 的效率。这些优化可以减少不必要的 DOM 操作，从而减少页面的重绘和重排，提高了整体的渲染性能。</p><h2 id="优化的算法" tabindex="-1"><a class="header-anchor" href="#优化的算法"><span>优化的算法</span></a></h2><p>Vue 3 在实现 diff 算法时采用了一些优化的策略和算法，例如深度优先遍历算法、双端比较算法等，以提高 diff 的效率和性能。</p>',17),s=[l];function t(n,h){return c(),a("div",null,s)}const r=e(o,[["render",t],["__file","vue3diff.html.vue"]]),p=JSON.parse('{"path":"/posts/vue/vue3diff.html","title":"Vue3在diff阶段都优化了哪些","lang":"zh-CN","frontmatter":{"date":"2024-06-03T00:00:00.000Z","category":["Vue"],"tag":["Vue","Diff"]},"headers":[{"level":2,"title":"静态提升","slug":"静态提升","link":"#静态提升","children":[]},{"level":2,"title":"预字符串化","slug":"预字符串化","link":"#预字符串化","children":[]},{"level":2,"title":"缓存事件处理函数","slug":"缓存事件处理函数","link":"#缓存事件处理函数","children":[]},{"level":2,"title":"Block Tree","slug":"block-tree","link":"#block-tree","children":[]},{"level":2,"title":"patchFlags","slug":"patchflags","link":"#patchflags","children":[]},{"level":2,"title":"shapeFlags","slug":"shapeflags","link":"#shapeflags","children":[]},{"level":2,"title":"快速路径和节点缓存","slug":"快速路径和节点缓存","link":"#快速路径和节点缓存","children":[]},{"level":2,"title":"优化的算法","slug":"优化的算法","link":"#优化的算法","children":[]}],"git":{"updatedTime":1717474505000,"contributors":[{"name":"brand-new-remo","email":"gangqiang.duan@foxmail.com","commits":2}]},"filePathRelative":"posts/vue/vue3diff.md","excerpt":"\\n<h2>静态提升</h2>\\n<p>在<code>模板编译时</code>，会将没有用到<code>动态变量</code>的<code>节点或属性(class、style这些元素属性)</code>进行<code>静态提升</code>，在进行render时，直接复用旧节点。而在<code>Vue2中</code>，无论元素是否使用了<code>动态变量</code>，每次更新都会<code>重新创建</code>，这也是为什么<code>Vue3</code>最好使用<code>template</code>而不是render函数，因为模板编译时会帮我们做优化；</p>\\n<h2>预字符串化</h2>"}');export{r as comp,p as data};
