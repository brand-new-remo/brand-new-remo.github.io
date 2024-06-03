---
date: 2024-06-03
category:
  - 安全
tag:
  - XSS
  - CSP
  - dompurify
---

# XSS

XSS（Cross-Site Scripting）攻击主要有三种类型：反射型 XSS、存储型 XSS 和 DOM 型 XSS。

1. **反射型 XSS**：攻击者将恶意脚本作为 URL 的一部分，当用户点击这个 URL 时，服务器将恶意脚本插入到返回的网页中。

   **例子**：假设有一个搜索网站，用户可以在 URL 中输入搜索关键字，例如 `http://www.example.com/search?keyword=JavaScript`。如果攻击者将恶意脚本作为关键字，例如 `http://www.example.com/search?keyword=<script>evilScript()</script>`，那么恶意脚本就会被插入到返回的网页中，当其他用户点击这个 URL 时，恶意脚本就会被执行。

   **防御措施**：对所有用户输入进行适当的处理，包括验证、过滤和转义。例如，可以使用 HTML 实体编码来转义特殊字符。

2. **存储型 XSS**：攻击者将恶意脚本提交到网站的数据库中，当其他用户浏览相关内容时，恶意脚本会被插入到返回的网页中。

   **例子**：假设一个社交网站允许用户发布评论。如果攻击者在评论中插入恶意脚本，例如 `<script>evilScript()</script>`，那么这个脚本就会被存储在数据库中。当其他用户查看这个评论时，恶意脚本就会被插入到返回的网页中，从而被执行。

   **防御措施**：除了对用户输入进行验证、过滤和转义外，还可以使用内容安全策略（CSP）来限制网页中脚本的来源和行为。

3. **DOM 型 XSS**：攻击者利用网页的 DOM 脚本逻辑，将恶意脚本插入到网页中。

   **例子**：假设一个网站使用 JavaScript 从 URL 中获取参数，并将其插入到网页中，例如 `document.getElementById('content').innerHTML = location.hash.substring(1)`。如果攻击者将恶意脚本作为 URL 的一部分，例如 `http://www.example.com/#<img src='x' onerror='evilScript()'>`，那么恶意脚本就会被插入到网页中，从而被执行。

   **防御措施**：除了对用户输入进行验证、过滤和转义外，还需要确保网页的 DOM 脚本逻辑不会导致安全问题。例如，可以使用 `textContent` 而不是 `innerHTML`，或者使用安全的库和函数来操作 DOM。防止 XSS 攻击主要有以下几个步骤：

   1. **对用户输入进行过滤和转义**：你可以使用一些库，如 DOMPurify，来自动清理用户输入，移除可能导致 XSS 攻击的部分。

   ```js
   import DOMPurify from 'dompurify'

   const userInput = '<script>alert("XSS Attack");</script>'
   const cleanInput = DOMPurify.sanitize(userInput)
   ```

   1. **使用 CSP（内容安全策略）**：CSP 可以限制浏览器加载和执行来自特定来源的资源，从而防止 XSS 攻击。你可以在 HTTP 响应头中设置 CSP，或者在 HTML 中使用 `<meta>` 标签设置。

   ```html
   <meta
     http-equiv="Content-Security-Policy"
     content="default-src 'self'; script-src 'self'"
   />
   ```

   1. **使用 HTTPOnly Cookies**：将敏感数据（如 session tokens）存储在 HTTPOnly Cookies 中，可以防止脚本访问这些数据。
   2. **使用 HTTPS**：HTTPS 可以防止数据在传输过程中被拦截和修改，从而防止 XSS 攻击。
   3. **对用户输入进行验证**：对用户输入进行严格的验证，只接受预期的输入，可以防止 XSS 攻击。

   **富文本编辑器防止XSS攻击：**

   1. **输入验证**：尽可能地限制用户输入的类型和格式。例如，如果你知道某个输入应该是数字，那么就只接受数字。
   2. **输出编码**：在将用户输入的数据插入到 HTML 中时，需要对特殊字符进行编码。例如，你可以将 `<` 替换为 `&lt;`，将 `>` 替换为 `&gt;`，将 `"` 替换为 `&quot;`，将 `'` 替换为 `&#x27;`，将 `/` 替换为 `&#x2F;`。这样，即使用户输入的数据包含有恶意的 JavaScript 代码，这些代码也不会被浏览器执行。
   3. **使用 HTTP Only Cookies**：将敏感的 Cookies 设置为 HTTP Only，这样 JavaScript 就无法访问这些 Cookies，从而防止了窃取 Cookies 的 XSS 攻击。
   4. **使用 Content Security Policy (CSP)**：CSP 是一种安全策略，它可以限制浏览器只加载和执行来自特定来源的脚本。这样，即使页面中包含有恶意的脚本，这些脚本也无法被执行。
   5. **使用安全的富文本编辑器**：许多富文本编辑器，如 CKEditor 和 TinyMCE，都提供了防止 XSS 攻击的功能。它们会对用户输入的数据进行清理和过滤，移除所有可能导致 XSS 攻击的内容。
   6. **使用安全的代码高亮库**：如果你的论坛支持代码编辑，那么你可能会使用一些代码高亮库，如 highlight.js 或 Prism。这些库通常都会对输入的代码进行安全处理，防止 XSS 攻击。
