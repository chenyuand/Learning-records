# Oracle Bone Python API

这是甲骨文AI翻译平台的Python后端API服务，提供基础的API接口功能。

## 项目结构

```
python-api/
├── app.py          # Flask应用主文件
├── requirements.txt # 项目依赖列表
└── README.md       # 项目说明文档
```

## 功能特性

- 提供RESTful API接口
- 支持CORS跨域访问
- 实现`/api/hello`端点，返回hello world消息
- 支持GET和POST两种请求方法
- 包含健康检查端点
- 完善的错误处理机制

## 快速开始

### 1. 安装依赖

使用pip安装项目所需的所有依赖：

```bash
cd python-api
pip install -r requirements.txt
```

### 2. 运行服务

启动Flask开发服务器：

```bash
python app.py
```

服务将运行在 `http://localhost:5000`

### 3. 测试API

#### 健康检查
```bash
curl http://localhost:5000/health
```

#### GET请求示例
```bash
curl http://localhost:5000/api/hello
```

或带参数的请求：
```bash
curl "http://localhost:5000/api/hello?name=oracle"
```

#### POST请求示例
```bash
curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello Oracle Bone Script!"}' http://localhost:5000/api/hello
```

## API文档

### GET /health
- **描述**: 健康检查端点
- **响应**: 
  ```json
  {
    "status": "healthy",
    "service": "Oracle Bone Python API",
    "version": "1.0.0"
  }
  ```

### GET /api/hello
- **描述**: 返回hello world消息
- **参数**: 
  - `name` (可选): 要问候的名称，默认为"world"
- **响应**: 
  ```json
  {
    "message": "hello world!",
    "status": "success",
    "method": "GET",
    "service_info": {
      "name": "Oracle Bone Python API",
      "description": "Chinese Oracle Bone Script Translation Platform API",
      "version": "1.0.0"
    }
  }
  ```

### POST /api/hello
- **描述**: 接收并返回消息
- **请求体**: 
  ```json
  {
    "message": "自定义消息"
  }
  ```
- **响应**: 
  ```json
  {
    "message": "自定义消息",
    "status": "success",
    "method": "POST",
    "timestamp": "not_provided"
  }
  ```

## 部署说明

### 开发环境
- 直接运行 `python app.py` 启动开发服务器

### 生产环境
推荐使用Gunicorn或uWSGI作为WSGI服务器：

```bash
# 安装Gunicorn
pip install gunicorn

# 运行Gunicorn
cd python-api
gunicorn -w 4 -b 0.0.0.0:5000 "app:app"
```

## 注意事项

1. 开发环境下`debug=True`启用了调试模式，生产环境应设为`False`
2. 确保端口5000未被其他应用占用
3. 如需修改端口，请在`app.run()`中更改`port`参数
4. 生产环境部署时应配置合适的WSGI服务器和反向代理

## 故障排除

- **端口被占用**: 检查是否有其他服务在使用5000端口，或修改为其他端口
- **依赖安装失败**: 确保pip版本较新，尝试更新pip: `pip install --upgrade pip`
- **CORS问题**: Flask-CORS已配置，如仍有跨域问题，请检查请求头和预检请求