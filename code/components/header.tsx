"use client"

import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter();
  
  // API响应占位函数
  const handleSearchClick = () => {
    console.log('API调用: 打开全局搜索面板');
    // 实际项目中这里会调用后端API
    // fetch('/api/search/open', { method: 'POST' })
  };

  const handleTranslateClick = () => {
    console.log('跳转到翻译页面');
    router.push('/translate');
    // 实际项目中这里可以先调用后端API，然后再跳转
    // fetch('/api/translate/chinese-english', { method: 'POST' })
    //   .then(() => router.push('/translate'))
  };

  const handleMenuClick = () => {
    console.log('API调用: 打开移动端菜单');
    // 实际项目中这里会调用后端API记录用户行为
    // fetch('/api/user/menu-click', { method: 'POST' })
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">甲</span>
              </div>
              <span className="text-lg font-semibold">甲骨文AI翻译平台</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                甲骨文发展通览
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                甲骨文AI对话
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                数字甲骨藏
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                数字甲骨技术框架
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                关于我们的平台
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleSearchClick}>
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleTranslateClick}>
              中英翻译
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={handleMenuClick}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
