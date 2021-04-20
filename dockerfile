from node:12-alpine

# 创建人
MAINTAINER 18556906294@163.com

# 工作目录
RUN mkdir /package
WORKDIR /package
COPY package.json /package/
RUN npm install --registry=http://npm.karldu.cn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN cp -a /package/node_modules /usr/src/app

# 配置环境变量
ENV HOST 0.0.0.0
ENV PORT 8080

# 暴露对外端口
EXPOSE 8080

# 容器启动时执行的命令
CMD ["npm", "run", "prod"]