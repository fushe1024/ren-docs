import{_ as a,c as t,a5 as i,o as d}from"./chunks/framework.DeASWWRe.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/vscode_git.md","filePath":"git/vscode_git.md","lastUpdated":1723555478000}'),c={name:"git/vscode_git.md"};function o(r,e,g,s,n,l){return d(),t("div",null,e[0]||(e[0]=[i('<h2 id="_1-vscode-git插件推荐" tabindex="-1">1. VSCode Git插件推荐 <a class="header-anchor" href="#_1-vscode-git插件推荐" aria-label="Permalink to &quot;1. VSCode Git插件推荐&quot;">​</a></h2><p>VSCode 中有很多 git 相关的插件，本教程中推荐下面两个：</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712460146110-aa4bb544-2e23-430e-8c34-bd20576e06fd.png" alt="img" loading="lazy"><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712460302583-786d3932-d144-44df-bf93-43cf9d60be3d.png" alt="img" loading="lazy"></p><h2 id="_2-创建仓库" tabindex="-1">2. 创建仓库 <a class="header-anchor" href="#_2-创建仓库" aria-label="Permalink to &quot;2. 创建仓库&quot;">​</a></h2><p>如图所示点击操作，即可借助<code>Vscode</code>来创建仓库</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712556404604-62a6c085-7ed4-4447-bbeb-30e53b50c519-1721547902308-154.png" alt="img" loading="lazy"></p><p>不同的工具创建出来的主分支名字可能不一样，比如 Vscode 中通过点击下方按钮创建的仓库，主分支的名字就叫<code>main</code>，当然也可以进行修改，让 Vscode 默认的主分支名是 <code>master</code></p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712891047594-1dc808d3-cbbe-4862-981f-4513324a78ae.png" alt="img" loading="lazy"></p><h2 id="_3-版本控制" tabindex="-1">3. 版本控制 <a class="header-anchor" href="#_3-版本控制" aria-label="Permalink to &quot;3. 版本控制&quot;">​</a></h2><p>点击 <code>+</code> 将文件添加到暂存区（相当于<code>git add</code>命令）</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712556976563-d185460b-3e6b-44dd-b57d-6286a2effa11.png" alt="img" loading="lazy"></p><p>点击【提交】将文件添加到版本区（相当于<code>git commit</code>命令）</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712557062735-d8082b50-861d-4bcc-8f06-1ad590deb4c6.png" alt="img" loading="lazy"></p><h2 id="_4-撤销暂存" tabindex="-1">4. 撤销暂存 <a class="header-anchor" href="#_4-撤销暂存" aria-label="Permalink to &quot;4. 撤销暂存&quot;">​</a></h2><p>点击 <code>—</code> 撤销对 b 文件的暂存</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712557180691-0674c78a-f0eb-4094-b565-9ba20711a957.png" alt="img" loading="lazy"></p><h2 id="_5-查看日志" tabindex="-1">5. 查看日志 <a class="header-anchor" href="#_5-查看日志" aria-label="Permalink to &quot;5. 查看日志&quot;">​</a></h2><p>点击【Git Graph】查看仓库日志</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712557564352-17899a97-01c7-4d88-ab70-d875e9da52bd.png" alt="img" loading="lazy"></p><h2 id="_6-对比差异" tabindex="-1">6. 对比差异 <a class="header-anchor" href="#_6-对比差异" aria-label="Permalink to &quot;6. 对比差异&quot;">​</a></h2><p>点击文件名对比文件和上次提交的差异</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712558030800-4fc911d8-4725-478a-8f9d-55d36a086887.png" alt="img" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712558051173-9c19f3fa-11a0-4cac-89ab-e30f76f0be6a.png" alt="img" loading="lazy"></p><p>点击某个版本的提交后，按住 ctrl 点击另一个版本号，可以对比两个版本的区别</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712892450863-8c9d3f5a-3b68-45b5-99bf-72f9ea1cfcc1.png" alt="img" loading="lazy"></p><h2 id="_7-版本回退" tabindex="-1">7. 版本回退 <a class="header-anchor" href="#_7-版本回退" aria-label="Permalink to &quot;7. 版本回退&quot;">​</a></h2><p>借助 Git Graph 以游离分支的形式回退（本质是 <code>git checkout 版本号</code>）</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712892732660-dba13139-1061-4f37-91ac-8c2a1319455d.png" alt="img" loading="lazy"></p><p>借助 Git History 版本回退（本质是 <code>git reset --hard 版本号</code>或 <code>git reset --soft 版本号</code>）</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712892866371-9792c18d-b4dc-4e72-9131-1b02ec9201a3.png" alt="img" loading="lazy"></p><h2 id="_8-添加-tag" tabindex="-1">8. 添加 tag <a class="header-anchor" href="#_8-添加-tag" aria-label="Permalink to &quot;8. 添加 tag&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712892949205-cdf5133d-a4e1-458e-aaca-228f94988376.png" alt="img" loading="lazy"></p><h2 id="_9-创建分支" tabindex="-1">9. 创建分支 <a class="header-anchor" href="#_9-创建分支" aria-label="Permalink to &quot;9. 创建分支&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712893556188-f96ea183-ee9b-4917-ad42-f8cd6bd98851.png" alt="img" loading="lazy"></p><h2 id="_10-分支合并" tabindex="-1">10. 分支合并 <a class="header-anchor" href="#_10-分支合并" aria-label="Permalink to &quot;10. 分支合并&quot;">​</a></h2><p>在当前分支上鼠标右键，随后选择将当前分支合并到哪个分支</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712898638404-3c0361eb-c851-422c-9f89-b8115f643eb1.png" alt="img" loading="lazy"></p><p>选择 <strong>Yes,merge</strong></p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712898652258-1beef4de-6431-48ee-a85b-fccbb9865ec1.png" alt="img" loading="lazy"></p><h2 id="_11-分支变基" tabindex="-1">11. 分支变基 <a class="header-anchor" href="#_11-分支变基" aria-label="Permalink to &quot;11. 分支变基&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712901334319-edb4f2d7-2f5b-4d42-9581-ce9b6e7bd3f3.png" alt="img" loading="lazy"></p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712901355177-972e9c05-b05a-4747-9a98-756e88321af6.png" alt="img" loading="lazy"></p><h2 id="_12-推送代码" tabindex="-1">12. 推送代码 <a class="header-anchor" href="#_12-推送代码" aria-label="Permalink to &quot;12. 推送代码&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712901387312-d5273e32-b4d5-4ab4-8ecb-c50bdc96fea7.png" alt="img" loading="lazy"></p><h2 id="_13-拉取代码" tabindex="-1">13. 拉取代码 <a class="header-anchor" href="#_13-拉取代码" aria-label="Permalink to &quot;13. 拉取代码&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712901408851-0f48ec59-5072-46ca-ab20-510ffc274b9c.png" alt="img" loading="lazy"></p><h2 id="_14-处理冲突" tabindex="-1">14. 处理冲突 <a class="header-anchor" href="#_14-处理冲突" aria-label="Permalink to &quot;14. 处理冲突&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/git/vscode_git/1712974519154-685b04f0-1e4b-4089-a1a5-4da06e58dbaa.png" alt="img" loading="lazy"></p>',48)]))}const m=a(c,[["render",o]]);export{h as __pageData,m as default};