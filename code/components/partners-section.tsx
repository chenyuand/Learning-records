import { Card } from "@/components/ui/card"

const partners = [
  { name: "中国社会科学研", logo: "/chinese-academy-logo.jpg" },
  { name: "清华大学", logo: "/tsinghua-university-logo.jpg" },
  { name: "复旦大学", logo: "/fudan-university-logo.jpg" },
  { name: "中国文字博物馆", logo: "/chinese-character-museum-logo.jpg" },
  { name: "南京大学", logo: "/nanjing-university-logo.jpg" },
  { name: "中国国家图书馆", logo: "/national-library-china-logo.jpg" },
  { name: "北京大学", logo: "/peking-university-logo.jpg" },
  { name: "浙江大学", logo: "/zhejiang-university-logo.jpg" },
  { name: "武汉大学", logo: "/placeholder.svg?height=80&width=120" },
  { name: "山东大学", logo: "/placeholder.svg?height=80&width=120" },
  { name: "四川大学", logo: "/placeholder.svg?height=80&width=120" },
  { name: "中山大学", logo: "/placeholder.svg?height=80&width=120" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">共创共建单位</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-card/50 backdrop-blur"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
