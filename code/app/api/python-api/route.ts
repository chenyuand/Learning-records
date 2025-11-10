export async function GET(request: Request) {
  try {
    // 这里调用Python API
    // 假设Python服务运行在http://localhost:5000/api/hello
    const pythonApiUrl = 'http://localhost:5000/api/hello';
    
    const response = await fetch(pythonApiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 注意：在生产环境中，需要处理CORS和认证等问题
    });
    
    if (!response.ok) {
      throw new Error(`Python API调用失败: ${response.status}`);
    }
    
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('调用Python API出错:', error);
    // 如果Python服务不可用，返回默认的hello world作为fallback
    return Response.json({ message: 'hello world!' });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // 这里调用Python API的POST方法
    const pythonApiUrl = 'http://localhost:5000/api/hello';
    
    const response = await fetch(pythonApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error(`Python API调用失败: ${response.status}`);
    }
    
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('调用Python API出错:', error);
    return Response.json({ message: 'hello world!', error: 'Python服务暂时不可用' });
  }
}