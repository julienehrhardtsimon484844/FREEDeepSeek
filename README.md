# FREEDeepSeek

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![License](https://img.shields.io/badge/License-MIT-blue)

[中文文档](#中文文档) | [English Documentation](#english-documentation)

<div align="center">

  **如果这个项目对你有帮助，请点个 Star 支持一下！ ⭐**

  **If this project helps you, please give a Star to support me! ⭐**

  [![GitHub stars](https://img.shields.io/github/stars/wangshengithub/FREEDeepSeek?style=social)](https://github.com/wangshengithub/FREEDeepSeek/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/wangshengithub/FREEDeepSeek?style=social)](https://github.com/wangshengithub/FREEDeepSeek/network/members)

</div>

---

## 中文文档

FREEDeepSeek 是一个基于 DeepSeek 的免费 AI 对话工具，无需任何配置即可在本地运行。支持 Markdown 渲染与流式响应。

### 🖼️ 项目截图

<div align="center">
  <img src="FREEDeepSeek.png" alt="FREEDeepSeek Screenshot" width="100%" />
</div>

### ✨ 特性

* 🎨 **清新蓝 UI**：简洁美观的现代化界面，适配移动端与桌面端。
* 📝 **Markdown 解析**：支持实时渲染代码块、列表、粗体等格式。
* 📋 **一键复制**：方便快捷地复制 AI 生成的内容。
* 🚀 **开箱即用**：内置 Node.js 代理，完美解决跨域（CORS）限制，无需配置。
* 🤖 **流式响应**：实时显示 AI 回复，体验流畅。
* ⭐ **开源免费**：完全开源代码，欢迎 Fork 和 Star。

### 📦 安装与运行

#### 前置要求

请确保你的电脑上已经安装了 **Node.js** (建议版本 18 或更高)。  
[下载 Node.js](https://nodejs.org/)

#### 快速开始

1. **克隆项目**
   
   ```bash
   git clone https://github.com/wangshengithub/FREEDeepSeek
   cd FREEDeepSeek
   ```

2. **安装依赖**
   
   ```bash
   npm install
   ```

3. **启动服务**
   
   ```bash
   npm start
   ```

4. **访问网页**
   启动成功后，打开浏览器访问：
   **[http://localhost:33333](http://localhost:33333)**

### 🛠️ 技术实现

本项目使用 **Node.js + Express** 搭建了一个本地代理服务器：

* **CORS 解决方案**：使用 `cors` 中间件允许前端跨域访问 API。
* **流式转发**：使用 `axios` 设置 `responseType: 'stream'`，将上游数据实时传输给浏览器。
* **前端渲染**：集成 `marked.js` 实现 Markdown 的高性能解析。

### 📝 使用说明

1. 启动服务后，直接在网页输入框发送消息即可。
2. 点击 AI 回复右上角的图标可复制内容。
3. 默认系统提示词已内置，如需修改请编辑 `index.html` 中的 `DEFAULT_SYSTEM_PROMPT` 变量。

## ⚠️ 免责声明

1. **非官方产品**：本项目 (`FREEDeepSeek`) 是一个非官方的第三方客户端工具，与 DeepSeek 官方或 API 提供商没有任何从属、合作或关联关系。
2. **数据隐私风险**：用户通过本软件发送的消息内容会被转发至第三方 API 服务器。**请勿在使用本工具时输入任何个人隐私、敏感信息、密码或受法律保护的机密数据。** 作者不对用户数据的泄露或丢失负责。
3. **内容责任**：AI 生成的内容可能存在不准确、有偏见或不恰当的信息。用户应对使用本软件生成的所有内容自行判断并承担全部风险，作者不对生成内容的准确性和可用性承担任何责任。
4. **服务可用性**：本工具依赖上游 API的服务稳定性。若上游 API 停止服务、更改接口或限流，本工具将无法正常使用，作者不承诺提供长期维护或修复。
5. **法律合规**：请确保您对本软件的使用符合当地法律法规的服务条款。因使用本软件而产生的一切法律纠纷，由使用者自行承担。

### 🤝 贡献

欢迎提交 Issue 或 Pull Request！

### 📄 License

MIT License

---

## English Documentation

FREEDeepSeek is a free AI conversation tool based on DeepSeek that requires no configuration to run locally. Supports Markdown rendering and streaming responses.

### 🖼️ Screenshot

<div align="center">
  <img src="FREEDeepSeek.png" alt="FREEDeepSeek Screenshot" width="100%" />
</div>

### ✨ Features

* 🎨 **Fresh Blue UI**: Modern and clean interface, responsive for mobile and desktop.
* 📝 **Markdown Parsing**: Supports real-time rendering of code blocks, lists, bold text, etc.
* 📋 **One-Click Copy**: Easily copy AI generated content.
* 🚀 **Ready to Use**: Built-in Node.js proxy solves CORS issues perfectly. No configuration needed.
* 🤖 **Streaming Response**: Displays AI replies in real-time for a smooth experience.
* ⭐ **Open Source & Free**: Fully open-source. Feel free to Fork and Star!

### 📦 Installation & Usage

#### Prerequisites

Ensure you have **Node.js** installed (Version 18 or higher recommended).
[Download Node.js](https://nodejs.org/)

#### Quick Start

1. **Clone the Project**
   
   ```bash
   git clone https://github.com/wangshengithub/FREEDeepSeek
   cd FREEDeepSeek
   ```

2. **Install Dependencies**
   
   ```bash
   npm install
   ```

3. **Start the Server**
   
   ```bash
   npm start
   ```

4. **Open in Browser**
   Once started, open your browser and navigate to:
   **[http://localhost:33333](http://localhost:33333)**

### 🛠️ Technical Implementation

This project uses **Node.js + Express** to build a local proxy server:

* **CORS Solution**: Uses the `cors` middleware to allow frontend cross-origin API access.
* **Streaming Forwarding**: Uses `axios` with `responseType: 'stream'` to pipe upstream data to the browser in real-time.
* **Frontend Rendering**: Integrates `marked.js` for high-performance Markdown parsing.

### 📝 Usage Guide

1. Start the server, then simply type your message in the web interface.
2. Click the icon in the top-right corner of the AI message bubble to copy content.
3. The default system prompt is built-in. To change it, edit the `DEFAULT_SYSTEM_PROMPT` variable in `index.html`.

## ⚠️ Disclaimer

1. **Non-Official Product**: This project (`FREEDeepSeek`) is an unofficial third-party client tool and has no affiliation, partnership, or association with DeepSeek officials or the API provider.
2. **Data Privacy Risks**: Messages sent via this software are forwarded to third-party API servers. **Please do not input any personal privacy, sensitive information, passwords, or legally protected confidential data when using this tool.** The author assumes no responsibility for user data leakage or loss.
3. **Content Responsibility**: AI-generated content may contain inaccuracies, biases, or inappropriate information. Users should judge independently and assume all risks for content generated using this software. The author bears no responsibility for the accuracy or usability of the generated content.
4. **Service Availability**: This tool depends on the stability of the upstream API. If the upstream API stops service, changes interfaces, or imposes rate limits, this tool may not function properly. The author does not commit to providing long-term maintenance or fixes.
5. **Legal Compliance**: Please ensure your use of this software complies with local laws, regulations, and the API provider's terms of service. Any legal disputes arising from the use of this software are the sole responsibility of the user.

### 🤝 Contributing

Issues and Pull Requests are welcome!

### 📄 License

MIT License
