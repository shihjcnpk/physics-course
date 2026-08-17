import type { Lesson } from '../types'

const MATH_COURSE = 'https://shihjcnpk.github.io/math-course/#/lectures/'

const LINKS: Array<{ keywords: string[]; lecture: number; title: string }> = [
  { keywords: ['正负数'], lecture: 2, title: '正负数与数的扩展' },
  { keywords: ['小数', '分数', '加法', '减法', '乘法', '除法', '单位换算', '时间换算', '百分数', '平方', '科学记数法', '估算'], lecture: 4, title: '有理数运算与科学记数法' },
  { keywords: ['比', '比率', '比例'], lecture: 13, title: '实际问题中的数量关系' },
  { keywords: ['方程', '相等关系'], lecture: 12, title: '方程思想与一元一次方程' },
  { keywords: ['坐标系', '坐标与方向', '位置与距离'], lecture: 31, title: '平面直角坐标系' },
  { keywords: ['图像', '图像趋势'], lecture: 33, title: '变量、函数与图像' },
  { keywords: ['表格', '排序', '分类'], lecture: 36, title: '统计图与数据表达' },
  { keywords: ['几何角', '几何直线', '垂线', '方向', '空间方向', '箭头'], lecture: 19, title: '线段与角的基本语言' },
  { keywords: ['面积', '体积', '体积差', '对称'], lecture: 32, title: '坐标方法与图形面积' },
]

export default function MathPrerequisiteCard({ lesson }: { lesson: Lesson }) {
  const prerequisites = lesson.math_prerequisite || []
  const noPatch = prerequisites.length === 0 || prerequisites.every(item => item === '无')
  const link = LINKS.find(item => item.keywords.some(keyword => prerequisites.includes(keyword)))

  return <section className="math-entry-card" aria-labelledby={`math-entry-${lesson.lesson_id}`}>
    <div className="math-entry-heading">
      <div><span>开课前</span><h2 id={`math-entry-${lesson.lesson_id}`}>先检查数学工具</h2></div>
      <strong>{noPatch ? '直接开始' : prerequisites.join(' · ')}</strong>
    </div>
    <p>{noPatch ? '本课没有额外数学门槛，可以直接进入物理问题。' : `数学前置：${prerequisites.join('、')}。${lesson.math_connection}`}</p>
    {!noPatch && <div className="math-entry-action">
      <span><b>5分钟小补丁：</b>先用一个生活数例，只练本课真正会用到的一步；做对后立即回到物理。</span>
      {link && <a href={`${MATH_COURSE}${link.lecture}`} target="_blank" rel="noreferrer">打开数学第{link.lecture}讲：{link.title} ↗</a>}
    </div>}
  </section>
}
