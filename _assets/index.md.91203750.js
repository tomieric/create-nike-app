import{g as e,f as a,C as n}from"./common-fdfbc665.js";const s='{"title":"create-lemon-app","frontmatter":{},"headers":[{"level":2,"title":"创建项目","slug":"创建项目"},{"level":3,"title":"命令","slug":"命令"},{"level":3,"title":"按模板创建项目","slug":"按模板创建项目"},{"level":3,"title":"强制覆盖","slug":"强制覆盖"}],"relativePath":"index.md","lastUpdated":1608274415796.354}';var t={};const p=n('<h1 id="create-lemon-app"><a class="header-anchor" href="#create-lemon-app" aria-hidden="true">#</a> create-lemon-app</h1><p>按照预设模板快速创建前端项目，参考 <a href="https://github.com/vitejs/create-vite-app" target="_blank" rel="noopener noreferrer">create-vite-app</a>, 整合 <code>vue-cli</code> 可配置对话模式。</p><h2 id="创建项目"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-bash"><pre><code>$ <span class="token function">yarn</span> create lemon-app my-demo\n</code></pre></div><p>或</p><div class="language-bash"><pre><code>$ <span class="token function">npm</span> init create-lemon-app my-demo\n</code></pre></div><h3 id="命令"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><div class="language-bash"><pre><code>$ <span class="token function">yarn</span> create lemon-app --help\n\nUsage: index <span class="token function">yarn</span> create lemon-app <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n\nOptions:\n  -V, --version              output the version number\n  -t, --template <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>  选择模板创建\n  -l, --list                 显示支持的模板\n  -f, --force                强制创建项目\n  -h, --help                 display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>\n\n <span class="token function">yarn</span> create lemon-app <span class="token operator">&lt;</span>template<span class="token operator">&gt;</span> \n</code></pre></div><h3 id="按模板创建项目"><a class="header-anchor" href="#按模板创建项目" aria-hidden="true">#</a> 按模板创建项目</h3><div class="language-bash"><pre><code>$ <span class="token function">yarn</span> create lemon-app -t react\n</code></pre></div><h3 id="强制覆盖"><a class="header-anchor" href="#强制覆盖" aria-hidden="true">#</a> 强制覆盖</h3><div class="warning custom-block"><p class="custom-block-title">强制覆盖</p><p>使用强制可将已存在的项目目录删除再重新创建项目</p></div><div class="language-bash"><pre><code>$ <span class="token function">yarn</span> create lemon-app -f my-demo\n</code></pre></div>',13);t.render=function(n,s,t,r,o,l){return a(),e("div",null,[p])};export default t;export{s as __pageData};
