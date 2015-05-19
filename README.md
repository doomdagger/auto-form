# auto-form
Scan web pages and generate form structure, for [yirendai](http://www.yirendai.com)

[![on npm](http://img.shields.io/npm/v/auto-form.svg?style=flat)](https://www.npmjs.org/package/auto-form) [![Tests](http://img.shields.io/travis/doomdagger/auto-form.svg?style=flat)](http://travis-ci.org/doomdagger/auto-form)
[![Dependencies](http://img.shields.io/david/doomdagger/auto-form.svg?style=flat)](https://david-dm.org/doomdagger/auto-form)

### Prerequisite

auto-form基于node.js开发，所以需要node.js软件平台，点击[这里](https://nodejs.org/)前往官网下载node.js。
* Windows系统可以直接双击下载好的msi文件安装
* Linux系统推荐从源码编译安装node.js，方法简述如下。

> 源码下载地址为[http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz]( http://nodejs.org/dist/v0.12.3/node-v0.12.3.tar.gz)，更改版本号即可下载对应版本的node.js平台源码，下载完成后，依次使用如下指令操作。

```bash
# 解压缩
$ tar -zxvf node-v0.12.3.tar.gz
# 编译 与 安装
$ make & make install
# 放在任意一个环境变量目录下
$ mv ./node /usr/local/bin
# 下载npm安装文件
$ curl -O http://npmjs.org/install.sh
# 赋予可执行权限
$ chmod +x install.sh
# 安装npm
$ ./install.sh
# 安装完成后，可进行测试
$ node -v & npm -v
```

### Install

我已将**auto-form**发布到[npmjs.org](http://npmjs.org)，[点击此](https://www.npmjs.com/package/auto-form)查看**auto-form**。安装**auto-form**使用**npm**即可，添加`-g`选项进行全局安装。
```bash
# 如果操作失败，记得使用sudo
$ npm install -g auto-form
```
> 如果安装失败是由于网络问题，建议使用[国内npm镜像](https://npm.taobao.org/)，方法如下。

```bash
# 通过淘宝npm镜像，安装cnpm
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
# 使用cnpm安装auto-form
$ cnpm install -g auto-form
```

### Usage
**auto-form**使用很简单，现在的功能也很单一，命令如下。
```bash
# auto-form [FILE]...
$ auto-form basic.html detail.html
```
操作完成后，会在当前目录下生成CSV文件。Enjoy :smile:
