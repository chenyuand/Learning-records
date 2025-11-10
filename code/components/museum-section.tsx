"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const museums = [
  {
    id: 1,
    title: "安阳博物馆",
    subtitle: "数据",
    image: "/anyang-museum-building-chinese-architecture.jpg",
  },
  {
    id: 2,
    title: "天津博物院",
    subtitle: "数据",
    image: "/tianjin-museum-modern-architecture.jpg",
  },
  {
    id: 3,
    title: "中国社会科学考古所",
    subtitle: "安阳工作站",
    image: "/archaeological-institute-building.jpg",
  },
  {
    id: 4,
    title: "韩国淑明女子大学博物馆",
    subtitle: "中国",
    image: "/sookmyung-university-museum-korea.jpg",
  },
  {
    id: 5,
    title: "青鸟斋大学",
    subtitle: "Fung Peng Library",
    image: "/university-library-classical-architecture.jpg",
  },
  {
    id: 6,
    title: "河北化工大学",
    subtitle: "Hebei University",
    image: "/hebei-university-campus-building.jpg",
  },
]

export function MuseumSection() {
  // API响应占位函数
  const handleMuseumClick = (museumId: number, title: string) => {
    console.log(`API调用: 获取博物馆"${title}"(ID: ${museumId})的详细信息`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/museums/${museumId}`, { method: 'GET' })
  };

  const handleViewDetailClick = (e: React.MouseEvent, museumId: number, title: string) => {
    e.stopPropagation(); // 防止触发卡片点击事件
    console.log(`API调用: 查看博物馆"${title}"(ID: ${museumId})的藏品详情`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/museums/${museumId}/collections`, { method: 'GET' })
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {museums.map((museum) => (
            <Card
              key={museum.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleMuseumClick(museum.id, museum.title)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={museum.image || "/placeholder.svg"}
                  alt={museum.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                  {museum.subtitle}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => handleViewDetailClick(e, museum.id, museum.title)}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{museum.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
