import{_ as i,c as a,a5 as n,o as l}from"./chunks/framework.DeASWWRe.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/project_deploy.md","filePath":"other/project_deploy.md","lastUpdated":1723555478000}'),p={name:"other/project_deploy.md"};function h(t,s,e,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="_1-项目打包" tabindex="-1">1. 项目打包 <a class="header-anchor" href="#_1-项目打包" aria-label="Permalink to &quot;1. 项目打包&quot;">​</a></h2><ul><li>我们开发用的脚手架其实就是一个<strong>微型服务器</strong>，用于：支撑开发环境、运行代理服务器等。</li><li>打包完的文件中不存在：<code>.vue</code>、<code>.jsx</code>、<code>.less</code> 等文件，而是：<code>html</code>、<code>css</code>、<code>js</code>等。</li><li>打包后的文件，不再借助脚手架运行，而是需要部署到服务器上运行。</li><li>打包前，请务必梳理好前端项目的<code>ajax</code>封装（请求前缀、代理规则等）。</li></ul><h2 id="_2-本地服务器部署" tabindex="-1">2. 本地服务器部署 <a class="header-anchor" href="#_2-本地服务器部署" aria-label="Permalink to &quot;2. 本地服务器部署&quot;">​</a></h2><h3 id="_2-1-搭建服务器" tabindex="-1">2.1 搭建服务器 <a class="header-anchor" href="#_2-1-搭建服务器" aria-label="Permalink to &quot;2.1 搭建服务器&quot;">​</a></h3><p>本地服务器可以用：<code>Java</code>、<code>Php</code>、<code>Go</code>、<code>Node.js</code> 等语言编写，本文档采用<code>express</code>编写服务器，端口号为：<code>8090</code>，代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// server.js文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Express 是一个极简且灵活的 Node.js Web 应用框架</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> express</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;express&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> express</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8090</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置public文件夹为静态资源。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(express.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;public&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(port, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Example app listening on port \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="_2-2-打包并部署" tabindex="-1">2.2 打包并部署 <a class="header-anchor" href="#_2-2-打包并部署" aria-label="Permalink to &quot;2.2 打包并部署&quot;">​</a></h3><p>第一步：将前端项目打包</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>具体的打包命令，可以参考<code>package.json</code>中的<code>scripts</code>字段配置。</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/other/project_deploy/202408132055137.png" alt="image-20240813205546096" loading="lazy"></p></div><p>第二步：将打包结果交给服务器</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一般打包完的目录为：dist 或 build 目录</p><p>将打包生成目录内的文件，放到服务器的静态资源文件夹中（上文中的<code>public</code>文件夹）</p></div><p>第三步：访问项目</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>浏览器访问：<code>http://localhost:8090</code>即可看到我们的项目，但此时会遇到两个问题：</p><ol><li>页面刷新 404</li><li>ajax 请求无法发送</li></ol></div><h3 id="_2-3-解决页面刷新404" tabindex="-1">2.3 解决页面刷新404 <a class="header-anchor" href="#_2-3-解决页面刷新404" aria-label="Permalink to &quot;2.3 解决页面刷新404&quot;">​</a></h3><p>问题分析：前端项目的路由，通常分为两种工作模式，分别为：</p><ul><li>hash模式</li></ul><div class="info custom-block"><p class="custom-block-title">说明</p><p>hash 值又称锚点，通常用于指定网页中的某个位置，例如下面的网址：<code>https://www.cctv.com/#SUBD1605080062959435</code>，其中的<code>#SUBD1605080062959435</code>就是 hash 值，hash 值只在客户端（如浏览器）中使用，是不会带给服务器的，所以使用 hash 模式时，不存在刷新 404 问题。</p></div><ul><li>history模式</li></ul><div class="info custom-block"><p class="custom-block-title">说明</p><p>history 去掉了<code>URL</code>中的<code>#</code>号，可以让应用的URL看起来更美观，带来的问题就是刷新时，会将前端路由携带给后端，而后端没有对应资源的匹配，就出现了 404 问题。</p></div><p>解决方案一：将前端路由器工作模式改为 hash 模式 （不推荐）</p><p>解决方案二：让服务器在收到未配置的<code>GET</code>路由时，都返回<code>index.html</code>即可。代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在服务器增加以下代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./public/index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><blockquote><p>方案二最终其实是把 url 中的 path，交给了前端路由去处理</p></blockquote><div class="warning custom-block"><p class="custom-block-title">补充</p><p>也可以借助<code>connect-history-api-fallback</code>中间件完成配置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> history</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;connect-history-api-fallback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用中间件 =&gt; 将其放置在静态资源中间件（如express.static）之前</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">history</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置public文件夹为静态资源。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(express.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;public&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>使用<code>connect-history-api-fallback</code>可以让配置更灵活，比如<code>/login</code>临时不需要作为前端路由处理，就可以按照如下方式配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">history</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	verbose:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	rewrites:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{ from:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">login</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> context.parsedUrl.path },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span></code></pre></div></div><h3 id="_2-4-解决请求无法发送" tabindex="-1">2.4 解决请求无法发送 <a class="header-anchor" href="#_2-4-解决请求无法发送" aria-label="Permalink to &quot;2.4 解决请求无法发送&quot;">​</a></h3><p>问题分析：脱离脚手架后，就没有了代理服务器，无法转发请求到【提供数据】的服务器，此时发送的请求就构成跨域。</p><p>解决方法：在 Node 服务器中借助<code>http-proxy-middleware</code>中间件配置代理服务，具体配置如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入createProxyMiddleware</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">createProxyMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http-proxy-middleware&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置代理中间件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createProxyMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.toutiao.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要转发到的服务器地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pathRewrite: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;^/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 去掉/api 拼接 target 转发到指定服务器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span></code></pre></div><h2 id="_3-nginx-服务器部署" tabindex="-1">3. nginx 服务器部署 <a class="header-anchor" href="#_3-nginx-服务器部署" aria-label="Permalink to &quot;3. nginx 服务器部署&quot;">​</a></h2><h3 id="_3-1-nginx简介" tabindex="-1">3.1 nginx简介 <a class="header-anchor" href="#_3-1-nginx简介" aria-label="Permalink to &quot;3.1 nginx简介&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/other/project_deploy/202408132053224.png" alt="image-20240813205350186" loading="lazy"></p><p><a href="https://github.com/nginx/njs/" target="_blank" rel="noreferrer">Nginx</a>（发音为“engine-x”）是一款高性能的 HTTP 服务器和反向代理服务器，同时也是一个 IMAP/POP3/SMTP 代理服务器。Nginx 最初由 Igor Sysoev 编写，于 2004 年发布。它以其高性能、高稳定性、丰富的功能集和低系统资源消耗而闻名，主要功能有：</p><ol><li>反向代理</li><li>负载均衡</li><li>静态内容服务</li><li>HTTP/2 支持</li><li>SSL/TLS 支持</li><li>高速缓存</li></ol><h3 id="_3-2-nginx-配置代理" tabindex="-1">3.2 nginx 配置代理 <a class="header-anchor" href="#_3-2-nginx-配置代理" aria-label="Permalink to &quot;3.2 nginx 配置代理&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">说明</p><p>今日头条接口地址：<code>https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc</code></p><p>直接向其发送 Ajax 请求会有跨域问题，接下来我们借助<code>nginx</code>解决跨域问题</p><p>nginx配置文件位置为：nginx目录conf文件夹下的nginx.conf文件，即<code>/nginx-1.27.0/conf/nginx.conf</code></p></div><p><strong>✅第一种配置方式：不过滤前缀</strong></p><p>以解决今日头条跨域，不过滤<code>/hot-event</code>前缀配置如下：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /hot-event </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置代理目标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://www.toutiao.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许跨域</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Expose-Headers&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>前端写法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:8090/hot-event/hot-board/?origin=toutiao_pc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>✅第二种配置方式：过滤前缀</strong></p><p>解决今日头条跨域，过滤<code>/api</code>前缀配置如下：</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置代理目标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://www.toutiao.com/;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许跨域</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Methods&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Allow-Headers&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  add_header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Access-Control-Expose-Headers&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>前端写法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:8090/api/hot-event/hot-board/?origin=toutiao_pc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">备注</p><p>使用下面配置删除上游服务器的指定响应头。</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">proxy_hide_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access-Control-Allow-Origin;</span></span></code></pre></div></div><h3 id="_3-3-nginx-部署前端项目" tabindex="-1">3.3 nginx 部署前端项目 <a class="header-anchor" href="#_3-3-nginx-部署前端项目" aria-label="Permalink to &quot;3.3 nginx 部署前端项目&quot;">​</a></h3><p>整体思路：让<code>nginx</code>充当两个角色，既是 <strong>静态内容服务器</strong>，又是<strong>代理服务器</strong>。</p><p>第一步：修改<code>nginx</code>配置如下，注意<code>nginx</code>的根目录最好<strong>不是 C 盘</strong></p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置nginx根目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  D:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\dist; # </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">打包好的文件目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  index  index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置代理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置代理目标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://www.toutiao.com/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>第二步：修改前端项目，让所有请求都转发给 <code>/api</code>，随后重新打包</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> request</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 基础地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  timeout:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>第三步：直接访问<code>nginx</code>服务器即可，例如 <code>nginx</code>如果运行在<code>8090</code>端口，则访问以下端口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:8090</span></span></code></pre></div><p>第四步：随后会遇到刷新<code>404</code>问题，追加<code>nginx</code>配置来解决</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置nginx根目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  D:\\dist;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解决刷新404</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置代理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /api/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置代理目标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://www.toutiao.com/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-云服务器部署" tabindex="-1">4. 云服务器部署 <a class="header-anchor" href="#_4-云服务器部署" aria-label="Permalink to &quot;4. 云服务器部署&quot;">​</a></h2>`,57)]))}const c=i(p,[["render",h]]);export{E as __pageData,c as default};
