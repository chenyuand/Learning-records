import { Card } from "@/components/ui/card"

const statistics = [
  {
    number: "1,430,000",
    label: "已收录甲骨文文字",
  },
  {
    number: "4,184",
    label: "个文库",
  },
  {
    number: "680,000",
    label: "片甲骨藏片",
  },
]

export function StatisticsSection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">约{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
