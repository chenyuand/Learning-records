'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"

export default function TranslatePage() {
  const [message, setMessage] = useState('加载中...')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // 调用Next.js API路由，这个路由会作为中间层调用Python服务
    const fetchPythonApiData = async () => {
      try {
        setIsLoading(true)
        setError('')
        
        const response = await fetch('/api/python-api', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`API调用失败: ${response.status}`)
        }
        
        const data = await response.json()
        // 假设Python API返回的格式是 { message: 'hello world!' }
        setMessage(data.message || 'hello world!')
      } catch (err) {
        console.error('获取数据失败:', err)
        setError('获取数据时出错')
        setMessage('hello world!') // 即使出错也显示默认消息
      } finally {
        setIsLoading(false)
      }
    }

    fetchPythonApiData()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-13rem)] px-4">
        <div className="text-center">
          <div className="text-4xl font-bold mb-4">
            {isLoading ? '加载中...' : message}
          </div>
          {error && (
            <div className="text-red-500 text-sm">
              {error}（显示默认消息）
            </div>
          )}
          <div className="mt-6 text-sm text-gray-500">
            数据来源：Python API服务
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}