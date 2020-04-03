module.exports = {
    title: '刁璐的博客',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '' }],
        ['link', { rel: 'apple-touch-icon', href: '' }]
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: 'vue', link: 'https://baidu.com',key:"a" },
            { text: 'rect', link: 'https://baidu.com',key:"b"},
            { text: '小程序', link: 'https://baidu.com',key:"c"}
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    },
    serviceWorker: true
    
};