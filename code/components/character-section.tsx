"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// 甲骨文字符列表
const oracleBoneCharacters = [
  "𠂇",
  "㐁",
  "㐂",
  "㐄",
  "㐅",
  "㐆",
  "㐈",
  "㐉",
  "㐊",
  "㐋",
  "㐌",
  "㐍",
  "㐎",
  "㐏",
  "㐐",
  "㐑",
  "㐒",
  "㐓",
  "㐔",
  "㐕",
  "㐖",
  "㐗",
  "㐘",
  "㐙",
  "㐚",
  "㐛",
  "㐜",
  "㐝",
  "㐞",
  "㐟",
  "㐠",
  "㐡",
  "㐢",
  "㐣",
  "㐤",
  "㐥",
  "㐦",
  "㐧",
  "㐨",
  "㐩",
  "㐪",
  "㐫",
  "㐬",
  "㐭",
  "㐮",
  "㐯",
  "㐰",
  "㐱",
  "㐲",
  "㐳",
  "㐴",
  "㐵",
  "㐶",
  "㐷",
  "㐸",
  "㐹",
  "㐺",
  "㐻",
  "㐼",
  "㐽",
  "㐾",
  "㐿",
  "㑀",
  "㑁",
  "㑂",
  "㑃",
]

// 字符详细信息映射（这里提供部分示例数据）
const characterDataMap: Record<string, { simplified: string; pinyin: string; explanation: string; evolution: string[] }> = {
  "𠂇": {
    simplified: "人",
    pinyin: "rén",
    explanation: "象形。甲骨文字形，象側面站立的人形。",
    evolution: ["𠂇", "㐁", "人"]
  },
  "㐁": {
    simplified: "大",
    pinyin: "dà",
    explanation: "象形。甲骨文字形，象正面站立的大人形。",
    evolution: ["㐁", "大", "大"]
  },
  "㐂": {
    simplified: "天",
    pinyin: "tiān",
    explanation: "会意。甲骨文字形，象人形头部加一指示符号，表示天空。",
    evolution: ["㐂", "天", "天"]
  },
  "㐄": {
    simplified: "口",
    pinyin: "kǒu",
    explanation: "象形。甲骨文字形，象人的嘴巴。",
    evolution: ["㐄", "口", "口"]
  },
  "㐅": {
    simplified: "五",
    pinyin: "wǔ",
    explanation: "指事。甲骨文字形，象交错的符号，表示数字五。",
    evolution: ["㐅", "五", "五"]
  },
  "㑂": {
    simplified: "从",
    pinyin: "cóng",
    explanation: "会意。甲骨文字形，象二人相随，表示跟从。",
    evolution: ["㑂", "从", "从"]
  }
};

// 获取字符数据，如果没有则返回默认数据
const getCharacterData = (char: string) => {
  return characterDataMap[char] || {
    simplified: "未识别",
    pinyin: "-",
    explanation: "暂无详细解释。",
    evolution: [char, char, char]
  };
};

export function CharacterSection() {
  const [selectedChar, setSelectedChar] = useState("𠂇");
  const [charData, setCharData] = useState(getCharacterData("𠂇"));

  // API响应占位函数
  const handleCharacterSelect = (char: string) => {
    setSelectedChar(char);
    const data = getCharacterData(char);
    setCharData(data);
    console.log(`API调用: 获取甲骨文字符${char}的详细信息`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/characters/${encodeURIComponent(char)}`, { method: 'GET' })
    //   .then(response => response.json())
    //   .then(data => setCharData(data));
  };

  const handleExploreClick = () => {
    console.log(`API调用: 探索甲骨文字符${selectedChar}的更多信息`);
    // 实际项目中这里会调用后端API
    // fetch(`/api/characters/${encodeURIComponent(selectedChar)}/explore`, { method: 'POST' })
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">甲骨文总文字介绍</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            甲骨文，又称「卜文辞」，是汉字文本体中文字演变的重要记录，它展示了早期文字符号与商周时代的联系。
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Character Grid */}
          <Card className="p-6">
            <div className="grid grid-cols-8 md:grid-cols-11 gap-3">
              {oracleBoneCharacters.map((char, index) => (
                <button
                  key={index}
                  onClick={() => handleCharacterSelect(char)}
                  className={`aspect-square flex items-center justify-center text-2xl font-serif border rounded-md hover:bg-accent transition-colors ${
                    selectedChar === char ? "bg-accent border-primary" : "bg-card border-border"
                  }`}
                >
                  {char}
                </button>
              ))}
            </div>
          </Card>

          {/* Character Detail */}
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">详解</h3>
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-serif">{selectedChar}</div>
                  <div className="flex flex-col gap-2">
                    <div className="text-4xl">{charData.simplified}</div>
                    <div className="text-2xl text-muted-foreground">{charData.pinyin}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">小象说文</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{charData.explanation}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">字体演变</h4>
                <div className="flex gap-4 text-3xl font-serif">
                  {charData.evolution.map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleExploreClick}>前往探索</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
