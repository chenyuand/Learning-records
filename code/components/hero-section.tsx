"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { FileText, Search } from "lucide-react"
import { useState } from "react"

/**
 * HeroSection 组件
 * 这是一个首页的主要部分，包含公告卡片和搜索功能区域
 * 提供了甲骨文相关内容的搜索和筛选功能
 */
export function HeroSection() {
  // 使用useState管理当前激活的标签页状态
  const [activeTab, setActiveTab] = useState('collections');
  
  // API响应占位函数
  const handleAnnouncementClick = (announcementType: string) => {
    console.log(`API调用: 获取${announcementType}公告详情`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/announcements/${announcementType}`, { method: 'GET' })
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`API调用: 切换到${tab}标签页`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/search/tabs/${tab}`, { method: 'POST' })
  };

  const handleSearch = () => {
    const searchInput = document.querySelector('input[placeholder="请输入检索词"]') as HTMLInputElement;
    const searchTerm = searchInput?.value || '';
    console.log(`API调用: 执行搜索，关键词: ${searchTerm}，当前标签: ${activeTab}`);
    // 实际项目中这里会调用后端API
    // fetch('/api/search/execute', {
    //   method: 'POST',
    //   body: JSON.stringify({ term: searchTerm, tab: activeTab })
    // })
  };

  const handleFilterClick = (filterType: string) => {
    console.log(`API调用: 应用筛选条件 - ${filterType}`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/search/filters/${filterType}`, { method: 'POST' })
  };

  return (
    <section className="relative bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24 bg-[url('/oracle-bone-ancient-chinese-artifact-archaeologica.jpg')] bg-cover bg-center bg-fixed bg-blend-overlay opacity-95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Announcement Cards */}
          <div className="space-y-3">
            <Card className="p-4 bg-accent/20 border-accent/30 hover:bg-accent/30 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded">
                  <FileText className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium">【人工智能大会】</span>
                  <span className="text-sm ml-2">人工智能与甲骨藏片内外文献关系分析与述写技术</span>
                </div>
                <Button variant="ghost" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleAnnouncementClick('ai-conference');
                }}>
                  了解更多
                </Button>
              </div>
            </Card>
            <Card className="p-4 bg-accent/20 border-accent/30 hover:bg-accent/30 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded">
                  <FileText className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium">【全国甲骨文文献模态数】</span>
                  <span className="text-sm ml-2">不同甲骨文文AI模态识检与非专业解析数据</span>
                </div>
                <Button variant="ghost" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleAnnouncementClick('modal-data');
                }}>
                  详情及日程信息
                </Button>
              </div>
            </Card>
          </div>

          {/* Search Section */}
          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="space-y-6">
              <div className="flex gap-4 border-b pb-4">
                <Button variant="ghost" className="border-b-2 border-primary" onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('collections');
                }}>
                  甲骨藏品库
                </Button>
                <Button variant="ghost" onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('documents');
                }}>甲骨文文库</Button>
                <Button variant="ghost" onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('codes');
                }}>甲骨片片码</Button>
              </div>

              <div className="relative">
                <Input placeholder="请输入检索词" className="h-12 pl-4 pr-12 text-base bg-background" />
                <Button size="icon" className="absolute right-2 top-2 bg-primary hover:bg-primary/90" onClick={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}>
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <Button variant="outline" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('dynasty');
                }}>
                  甲骨藏分王朝
                </Button>
                <Button variant="outline" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('era');
                }}>
                  甲骨藏分年代
                </Button>
                <Button variant="outline" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('region');
                }}>
                  甲骨藏分地域
                </Button>
                <Button variant="outline" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('category');
                }}>
                  甲骨藏原文分类
                </Button>
                <Button variant="outline" size="sm" onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick('museum');
                }}>
                  甲骨藏博物馆
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
