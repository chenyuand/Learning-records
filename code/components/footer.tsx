export function Footer() {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">关于平台</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>关于我们</li>
              <li>服务条款</li>
              <li>隐私政策</li>
              <li>网站地图</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">学术资源</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>甲骨文数据库</li>
              <li>研究文献</li>
              <li>学术论坛</li>
              <li>专家团队</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">合作交流</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>合作机构</li>
              <li>学术会议</li>
              <li>项目申报</li>
              <li>联系我们</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">技术支持</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>AI翻译技术</li>
              <li>数字化采集</li>
              <li>数据标注</li>
              <li>技术文档</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>© 2025 甲骨文AI翻译平台 版权所有 | ICP备案号：京ICP备XXXXXXXX号</p>
          <p className="mt-2">中国社会科学院 · 清华大学 · 复旦大学 联合研发</p>
        </div>
      </div>
    </footer>
  )
}
