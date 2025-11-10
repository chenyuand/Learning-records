"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const hotspots = [
  { id: 1, label: "甲", top: "15%", left: "30%" },
  { id: 2, label: "乙", top: "25%", left: "50%" },
  { id: 3, label: "丙", top: "35%", left: "25%" },
  { id: 4, label: "丁", top: "45%", left: "65%" },
  { id: 5, label: "戊", top: "55%", left: "40%" },
  { id: 6, label: "己", top: "65%", left: "70%" },
  { id: 7, label: "庚", top: "75%", left: "35%" },
  { id: 8, label: "辛", top: "70%", left: "80%" },
]

export function MapSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  // API响应占位函数
  const handleHotspotClick = (hotspotId: number, label: string) => {
    setActiveHotspot(hotspotId);
    console.log(`API调用: 获取考古地点${label}(${hotspotId})的详细信息`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/archaeology/hotspots/${hotspotId}`, { method: 'GET' })
  };

  const handleMapExploreClick = () => {
    console.log(`API调用: 探索考古地图，当前选中地点: ${hotspots.find(h => h.id === activeHotspot)?.label || '未选中'}`);
    // 实际项目中这里会调用后端API
    // fetch('/api/archaeology/explore', {
    //   method: 'POST',
    //   body: JSON.stringify({ hotspotId: activeHotspot })
    // })
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">甲骨藏全局总考古介绍</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Interactive Map */}
          <Card className="relative aspect-square overflow-hidden bg-secondary/30">
            <img src="/oracle-bone-ancient-chinese-artifact-archaeologica.jpg" alt="Oracle Bone Artifact" className="w-full h-full object-cover" />
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => handleHotspotClick(hotspot.id, hotspot.label)}
                style={{ top: hotspot.top, left: hotspot.left }}
                className={`absolute w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                  activeHotspot === hotspot.id
                    ? "bg-primary text-primary-foreground border-primary scale-110"
                    : "bg-accent/80 text-accent-foreground border-accent-foreground/50 hover:scale-105"
                }`}
              >
                {hotspot.label}
              </button>
            ))}
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
              世界最早发现最王朝 甲骨藏题记研究
            </div>
          </Card>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-balance">
                商朝期间，古代商族上：
                <br />
                关于「有何洞」
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>多记载为对东。对比今后学位和历史记载，作为「有何洞」</p>
                <p>宁遍民A与民洞形、大龄组交与「有何洞」文字与</p>
                <p>高记成功朝洞象，高良局与「有何洞」</p>
                <p>古记成为生记录关于「有何洞」</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleMapExploreClick}>前往探索</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
