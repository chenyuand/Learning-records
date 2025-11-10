from flask import Flask, jsonify, request
from flask_cors import CORS

# 创建Flask应用实例
app = Flask(__name__)

# 启用CORS，允许前端跨域访问
CORS(app)

# 健康检查端点
@app.route('/health', methods=['GET'])
def health_check():
    """健康检查端点，用于验证服务是否正常运行"""
    return jsonify({
        'status': 'healthy',
        'service': 'Oracle Bone Python API',
        'version': '1.0.0'
    }), 200

# 主要的hello world端点
@app.route('/api/hello', methods=['GET', 'POST'])
def hello_world():
    """
    提供hello world功能的API端点
    支持GET和POST方法
    GET: 返回默认的hello world消息
    POST: 可以接收自定义消息并返回
    """
    if request.method == 'POST':
        # 尝试从请求体获取数据
        data = request.get_json()
        if data and 'message' in data:
            # 如果提供了自定义消息，则使用它
            return jsonify({
                'message': data['message'],
                'status': 'success',
                'method': 'POST',
                'timestamp': request.args.get('timestamp', 'not_provided')
            }), 200
        else:
            # 如果没有提供有效数据，返回默认消息和错误提示
            return jsonify({
                'message': 'love you',
                'status': 'warning',
                'method': 'POST',
                'error': 'No valid message provided in request body'
            }), 200
    else:  # GET方法
        # 获取查询参数（如果有）
        name = request.args.get('name', 'World')
        
        # 返回格式化的I love you消息
        return jsonify({
            'message': f'love you, {name}!',
            'status': 'success',
            'method': 'GET',
            'service_info': {
                'name': 'Oracle Bone Python API',
                'description': 'Chinese Oracle Bone Script Translation Platform API',
                'version': '1.0.0'
            }
        }), 200

# 404错误处理
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'error': 'Resource not found',
        'status_code': 404,
        'message': 'The requested endpoint does not exist'
    }), 404

# 500错误处理
@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'error': 'Internal server error',
        'status_code': 500,
        'message': 'An unexpected error occurred on the server'
    }), 500

if __name__ == '__main__':
    # 开发环境下运行服务器
    # host='0.0.0.0' 允许从任何地址访问
    # port=5000 使用指定端口
    # debug=True 启用调试模式（生产环境应设为False）
    app.run(host='0.0.0.0', port=5000, debug=True)