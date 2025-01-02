const Sitemap = require('sitemap');
const fs = require('fs');

// 定义网站的基础 URL，替换为你自己的实际域名
const baseURL = 'https://www.2048qp.com';

// 创建包含首页信息的页面对象
const homePage = {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString()  // 使用当前日期时间作为最后更新时间
};

// 创建 sitemap 实例
const sitemap = new Sitemap({
    hostname: baseURL,
    cacheTime: 600000  // 缓存时间，单位是毫秒，这里设置为10分钟，可按需调整
});

// 将首页信息添加到 sitemap 中
sitemap.add(homePage);

// 生成 XML 格式的 sitemap 内容，设置 pretty 为 true 可以让生成的 XML 格式更美观易读
sitemap.toXML((err, xml) => {
    if (err) {
        console.error(err);
        return;
    }
    // 将生成的 sitemap.xml 内容写入到文件中，可根据实际情况调整文件保存路径
    fs.writeFileSync('sitemap.xml', xml);
});
