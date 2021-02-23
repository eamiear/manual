# `GitHub` 和 `GitLab` 共同使用

说明
> 公司 `GitLab` 私服与个人 `GitHub` 服务，因使用邮箱不同，产生的 `SSH key` 不同，从而导致冲突。

# 解决方案

## 方案一

`Gitlab` 与 `Github` 邮箱地址保持一致！

## 方案二

### 基于 `config` 文件

#### 1.  配置 `Git` 用户名、邮箱 
> `window` 系统，`ssh` 的路径为：`C:\Users\Administrator\.ssh`

用户 `onbright` 的配置如下：

``` bash
# 全局配置，Github仓库中默认使用此配置
git config --global user.name 'onbright' && git config --global user.email 'onbright@gmail.com' 

# *团队项目配置，每次新创建一个项目，需要执行下
git config --local user.name 'onbright' && git config --local user.email 'onbright@on-bright.cn' 
```

#### 2. 生成 `ssh key` 上传到 `Github/Gitlab`

`ssh key` 默认生成后保存在 `~/.ssh/` 目录下 ，默认为 `id_rsa 和 id_rsa.pub` 两个文件，由于我们需要分开配置，所以这么做：

``` bash 
# 生成公钥、密钥的同时指定文件名，Gitlab使用
ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitlab -C "onbright@on-bright.cn"

# 生成默认，Github使用
ssh-keygen -t rsa -C "onbright@gmail.com"
```

命令执行完成后，这时 `~/.ssh` 目录下会多出 `id_rsa.gitlab` 和 `id_rsa.gitlab.pub` 两个文件，`id_rsa.gitlab.pub` 里保存的就是我们要使用的 `key` ，这个 `key` 就是用来上传到 `Gitlab`上的。

#### 3. 配置 `config` 文件 
在 `~/.ssh`目录下，如果不存在，则新建 `touch ~/.ssh/config` 文件**(`window`系统在 `ssh` 目录下右键创建 `config` 文件)** ，文件内容添加如下：

``` bash 
Host *.myonbright.com
     IdentityFile ~/.ssh/id_rsa.gitlab
     User onbright
```

配置完成后，符合 `*.onbright.com` 后缀的 `Git` 仓库，均采取` ~/.ssh/id_rsa.gitlab` 密钥进行验证，其它的采取默认的。

#### 4. 上传 `public key` 到 `Github/Gitlab `

以 `Github` 为例，过程如下：

1. 登录 `github`
2. 点击右上方的 `Accounting settings` 图标
3. 选择 `SSH key`
4. 点击 `Add SSH key`

在出现的界面中填写`SSH key`的名称，填一个你自己喜欢的名称即可，然后将上面拷贝的`~/.ssh/id_rsa.pub`文件内容粘帖到 `key` 一栏，在点击 “`add key`” 按钮就可以了。

添加过程`github`会提示你输入一次你的 `github` 密码 ，确认后即添加完毕。 上传`Gitlab`的过程一样，请自己操作。

#### 5. 验证

``` bash 
➜  ~  ssh -T git@github.com
Hi onbright! You've successfully authenticated, but GitHub does not provide shell access.
➜  ~  ssh -T git@gitlab.myonbright.com
Welcome to GitLab, onbright!
```

