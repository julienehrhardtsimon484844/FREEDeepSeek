const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 33333;
app.use(cors());
app.use(express.static(__dirname));
app.get('/api/stream', async (req, res) => {
    try {
        const messageParam = req.query.message;
        const targetUrl = `http://203.195.213.174:3001/api/stream?message=${messageParam}`;
        console.log(`[Proxy] Forwarding request to: ${targetUrl.substring(0, 50)}...`);
        const response = await axios({
            method: 'GET',
            url: targetUrl,
            responseType: 'stream'
        });
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        response.data.pipe(res);
    } catch (error) {
        console.error('[Proxy] Error:', error.message);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Backend proxy failed' });
        } else {
            res.end(); 
        }
    }
});
app.listen(PORT, () => {
    console.log(`\n🚀 FREEDeepSeek 服务已启动！`);
    console.log(`👉 请在浏览器中打开: http://localhost:${PORT}`);    
    console.log(`👉 开发：wangshengithub（点个Star呗）`);
    console.log(`👉 按 Ctrl+C 停止服务\n`);
});