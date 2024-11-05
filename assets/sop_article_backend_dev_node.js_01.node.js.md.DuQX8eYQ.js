import{j as s,b as i,c as a,aa as n}from"./chunks/framework.Dkh8-idd.js";const g=JSON.parse('{"title":"node.js环境安装","description":"","frontmatter":{"title":"node.js环境安装","date":"2024-03-19T01:49:31.000Z","tags":["后端","node.js"],"categories":["后端"],"cover":"https://blog.4linux.com.br/wp-content/uploads/2019/12/node-js-1900x950_c.png","hiddenCover":true},"headers":[],"relativePath":"sop/article/backend_dev/node.js/01.node.js.md","filePath":"sop/article/backend_dev/node.js/01.node.js.md","lastUpdated":1712178944000}'),e={name:"sop/article/backend_dev/node.js/01.node.js.md"},t=n(`<h1 id="node-js环境安装" tabindex="-1">node.js环境安装 <a class="header-anchor" href="#node-js环境安装" aria-label="Permalink to &quot;node.js环境安装&quot;">​</a></h1><p>要安装 Node.js，你可以从 Node.js 官方网站下载适合你操作系统的安装包。以下是针对不同操作系统的安装步骤</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><ol><li>访问 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js 官方网站</a>。</li><li>下载适合你系统的安装包，通常有 LTS（长期支持版）和 Current（最新版）两个选项。</li><li>运行下载的安装程序。</li><li>按照安装向导的指示完成安装。建议使用默认设置。</li><li>安装完成后，打开命令提示符，输入以下命令以验证安装是否成功：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>你应该能看到 Node.js 和 npm 的版本号。</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><ol><li>访问 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js 官方网站</a>。</li><li>下载适合 macOS 的.pkg安装包。</li><li>打开下载的.pkg文件，并按照安装向导的指示完成安装。</li><li>安装完成后，打开终端，输入以下命令以验证安装是否成功：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>在 Linux 上，你可以使用包管理器来安装 Node.js。以下是一些常见 Linux 发行版的安装方法：</p><h4 id="ubuntu-或-debian" tabindex="-1">Ubuntu 或 Debian： <a class="header-anchor" href="#ubuntu-或-debian" aria-label="Permalink to &quot;Ubuntu 或 Debian：&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://deb.nodesource.com/setup_14.x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -E</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span></span></code></pre></div><p>替换 <code>14.x</code> 为你想要安装的 Node.js 版本号。</p><h4 id="fedora" tabindex="-1">Fedora： <a class="header-anchor" href="#fedora" aria-label="Permalink to &quot;Fedora：&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span></span></code></pre></div><h4 id="centos" tabindex="-1">CentOS： <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;CentOS：&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> epel-release</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span></span></code></pre></div><p>安装完成后，打开终端，输入以下命令以验证安装是否成功：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h3 id="使用-nvm-推荐" tabindex="-1">使用 nvm (推荐) <a class="header-anchor" href="#使用-nvm-推荐" aria-label="Permalink to &quot;使用 nvm (推荐)&quot;">​</a></h3><p>对于开发者来说，使用 <code>nvm</code>（Node Version Manager）是一个更好的选择，因为它允许你在同一台机器上安装和管理多个 Node.js 版本。以下是安装 nvm 的步骤：</p><ol><li>打开终端或命令提示符。</li><li>运行以下命令来安装 nvm（根据你的操作系统，命令可能有所不同）：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span></span></code></pre></div><ol start="3"><li>根据安装脚本中的说明完成 nvm 的安装。</li><li>重启终端或命令提示符。</li><li>使用 nvm 安装 Node.js：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装最新版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --lts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装 LTS 版本</span></span></code></pre></div><ol start="6"><li>使用 nvm 切换 Node.js 版本：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --lts</span></span></code></pre></div><ol start="7"><li>验证 Node.js 和 npm 是否安装成功：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>使用 nvm，你可以轻松切换 Node.js 版本，这对于项目依赖不同版本 Node.js 的情况非常有用。</p>`,31),l=[t];function h(p,d,k,o,r,c){return i(),a("div",null,l)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};