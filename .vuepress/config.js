module.exports = {
    title: '昂宝前端手册',
    descirption: '',
    port: 9000,
    base: process.env.NODE_ENV === 'development' ? '/' : '/manual/',
    themeConfig: {
        search: false, // 搜索
        navbar: false, // 导航
        nextLinks: false, // 下一页
        prevLinks: false, // 上一页
        nav: [
        ],
        sidebar: [
            {
                title: '基本规范',   // 必要的
                //	path: '/basics-guide/course',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/0-guide/0-home.md', '首页概览'],
                    ['/0-guide/1-branch.md', '分支管理'],
                    ['/0-guide/2-commit.md', '提交规范'],
                    ['/0-guide/3-style.md', '样式规范'],
                    ['/0-guide/4-deploy.md', '项目部署'],
                ]
            },
            {
                title: '基础框架',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/1-framework/1-usage-of-web-frameword.md', '管理平台'],
                    ['/1-framework/2-usage-of-miniapp-frameword.md', '小程序'],
                ]
            },
            {
                title: '组件',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/4-component/1-component-ui.md', 'Web组件'],
                    ['/4-component/2-uni-component-ui.md', '小程序组件'],
                ]
            },
            {
                title: '常用工具',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/2-tools/1-git-usage.md', 'Git使用'],
                    ['/2-tools/2-how-to-use-sourceTree.md', 'source-tree使用'],
                    ['/2-tools/3-how-to-use-gitlab-github-together.md', 'gitlab与github同时使用'],
                    ['/2-tools/4-vscode-plugins.md', 'vscode常用插件'],
                ]
            },
            {
                title: '代码块',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 3,    // 可选的, 默认值是 1
                children: [
                    ['/3-codebase/1-how-to-use-wechat-share.md', '微信分享'],
                ]
            },
        ]
    },
    plugins:[
        ['vuepress-plugin-export-pdf'],
        [
            'vuepress-plugin-medium-zoom',
            {
                options: {
                    margin: 16
                }
            }
        ]

    ]
 }

