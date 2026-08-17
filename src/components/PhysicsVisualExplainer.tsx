import { useEffect, useMemo, useState } from 'react'
import visualData from '../../data/grade8_visual_explainers.json'

interface VisualExplainer {
  lesson_id: string
  title: string
  abstract_point: string
  analogy: string
  physics_truth: string
  boundary: string
  memory_hook: string
  diagram_kind: string
  stages: string[]
  reading_guide: {
    object: string
    change: string
    result: string
    conclusion: string
  }
}

function PrincipleGuide({ explainer, phase }: { explainer: VisualExplainer; phase: number }) {
  const steps = [
    { label: '① 看谁', value: explainer.reading_guide.object, active: phase === 0 },
    { label: '② 改什么 / 比什么', value: explainer.reading_guide.change, active: phase === 1 },
    { label: '③ 看到什么', value: explainer.reading_guide.result, active: phase === 2 },
  ]
  return <div className="principle-guide" aria-label="读图步骤">
    <div className="principle-flow">
      {steps.map((step, index) => <div className={`principle-step ${step.active ? 'active' : ''}`} key={step.label}>
        <strong>{step.label}</strong><span>{step.value}</span>{index < steps.length - 1 && <b aria-hidden="true">→</b>}
      </div>)}
    </div>
    <div className="principle-conclusion"><span>所以</span><strong>{explainer.reading_guide.conclusion}</strong></div>
  </div>
}

const explainers = visualData.explainers as VisualExplainer[]

const ICONS: Record<string, string[]> = {
  measurement: ['📏', '🔢', '🏷️'],
  'reference-frame': ['🚆', '🧒', '🚉'],
  speed: ['🏃', '⏱️', '5 m/s'],
  'average-speed': ['🚴', '🛑', '总账'],
  'paired-measurement': ['🛝', '📐', '⏱️'],
  'sound-chain': ['🥁', '〰️', '👂'],
  'sound-traits': ['🎵', '🔊', '🎻'],
  'noise-chain': ['🔨', '🧱', '🎧'],
  thermometer: ['🌡️', '↕️', '👀'],
  'state-map': ['🧊', '💧', '☁️'],
  'melting-curve': ['🧊', '♨️', '💧'],
  'boiling-curve': ['💧', '🫧', '100℃'],
  'phase-energy': ['💧', '💨', '♨️'],
  'water-cycle': ['🌊', '☁️', '🌧️'],
  'light-ray': ['🔦', '➡️', '🌑'],
  reflection: ['🔦', '🪞', '↗️'],
  'mirror-symmetry': ['🧍', '🪞', '🧍'],
  refraction: ['🔦', '🌊', '↘️'],
  lenses: ['➡️', '🔍', '🎯'],
  'image-zones': ['2F', 'F', '👁️'],
  'optical-apps': ['📷', '📽️', '🔍'],
  'mass-invariance': ['🟠', '⚖️', '🦆'],
  'density-cubes': ['🧊', '⚖️', '🧱'],
  'density-measurement': ['⚖️', '🧪', 'ρ'],
  'liquid-density': ['⚖️', '➖', '🧪'],
  'scale-chain': ['🔎', '🧬', '🛠️'],
}

function Axes({ yLabel = '温度', xLabel = '时间' }: { yLabel?: string; xLabel?: string }) {
  return <>
    <line x1="92" y1="238" x2="356" y2="238" className="model-line" />
    <line x1="92" y1="238" x2="92" y2="52" className="model-line" />
    <text x="324" y="264" className="model-label">{xLabel}</text>
    <text x="35" y="60" className="model-label">{yLabel}</text>
  </>
}

function ModelDiagram({ kind, phase }: { kind: string; phase: number }) {
  const active = (n: number) => phase >= n ? 'model-active' : 'model-muted'
  const arrowId = `arrow-${kind}`

  if (kind === 'reference-frame') return (
    <svg viewBox="0 0 720 300" role="img" aria-label="参照物位置对比图">
      <defs><marker id={arrowId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" /></marker></defs>
      <rect x="80" y="105" width="350" height="90" rx="18" className="model-object" />
      <circle cx="255" cy="105" r="24" className="model-person" /><text x="236" y="112">乘客</text>
      <rect x="215" y="145" width="80" height="20" rx="6" className="model-seat" /><text x="226" y="185">相对座椅：位置不变</text>
      <line x1="445" y1="210" x2="650" y2="210" className="model-ground" /><rect x="540" y="165" width="12" height="45" className="model-station" />
      <line x1="420" y1="130" x2="615" y2="130" className={active(1)} markerEnd={`url(#${arrowId})`} />
      <text x="485" y="112" className={active(1)}>相对站台：位置改变</text>
    </svg>
  )

  if (kind === 'speed' || kind === 'average-speed') return (
    <svg viewBox="0 0 720 300" role="img" aria-label={kind === 'speed' ? '速度单位时间图' : '平均速度总过程图'}>
      <defs><marker id={arrowId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" /></marker></defs>
      {kind === 'speed' ? <>
        {[0, 1, 2, 3, 4].map(i => <g key={i} className={active(i > 0 ? 1 : 0)}><rect x={75 + i * 110} y="116" width="82" height="42" rx="8" /><text x={98 + i * 110} y="144">1秒</text></g>)}
        <line x1="70" y1="190" x2="630" y2="190" className="model-line" markerEnd={`url(#${arrowId})`} />
        <text x="250" y="226" className={active(2)}>每格5 m → 速度5 m/s</text>
      </> : <>
        <line x1="80" y1="170" x2="650" y2="170" className="model-line" markerEnd={`url(#${arrowId})`} />
        <rect x="90" y="112" width="205" height="38" rx="8" className="model-fast" /><text x="145" y="138">快行：s₁、t₁</text>
        <rect x="310" y="112" width="125" height="38" rx="8" className="model-stop" /><text x="342" y="138">停留t₂</text>
        <rect x="450" y="112" width="175" height="38" rx="8" className="model-slow" /><text x="494" y="138">慢行：s₃、t₃</text>
        <text x="170" y="224" className={active(2)}>平均速度 = 总路程 ÷ 总时间</text>
      </>}
    </svg>
  )

  if (kind === 'sound-chain') return (
    <svg viewBox="0 0 720 300" role="img" aria-label="声音振动传播链">
      <defs><marker id={arrowId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" /></marker></defs>
      <ellipse cx="95" cy="150" rx="45" ry="72" className="model-drum" /><path d="M95 88 Q78 150 95 212 Q112 150 95 88" className="model-wave" />
      {[0,1,2,3,4,5,6].map(i => <circle key={i} cx={190+i*58} cy={150+(i%2 ? 10 : -10)} r="12" className={active(i < 2 ? 0 : i < 5 ? 1 : 2)} />)}
      <path d="M600 90 Q675 150 600 210 Q630 150 600 90" className="model-ear" />
      <line x1="145" y1="150" x2="580" y2="150" className="model-arrow" markerEnd={`url(#${arrowId})`} />
      <text x="270" y="245">粒子原地附近振动，扰动向前传播</text>
    </svg>
  )

  if (kind === 'sound-traits') return (
    <svg viewBox="0 0 720 300" role="img" aria-label="音调响度音色波形对比">
      <line x1="40" y1="80" x2="680" y2="80" className="model-axis" />
      <path d="M45 80 Q65 25 85 80 T125 80 T165 80 T205 80" className="model-wave" /><text x="245" y="86">更密 → 频率高 → 音调高</text>
      <line x1="40" y1="160" x2="680" y2="160" className="model-axis" />
      <path d="M45 160 Q85 80 125 160 T205 160" className={active(1)} /><text x="245" y="166" className={active(1)}>振幅大 → 响度通常大</text>
      <line x1="40" y1="240" x2="680" y2="240" className="model-axis" />
      <path d="M45 240 Q65 195 85 240 Q105 270 125 240 Q145 185 165 240 Q185 260 205 240" className={active(2)} /><text x="245" y="246" className={active(2)}>形状不同 → 音色不同</text>
    </svg>
  )

  if (kind === 'state-map' || kind === 'water-cycle') return (
    <svg viewBox="0 0 720 300" role="img" aria-label={kind === 'state-map' ? '三态六种变化图' : '水循环状态变化图'}>
      <defs><marker id={arrowId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" /></marker></defs>
      {kind === 'state-map' ? <>
        <circle cx="120" cy="150" r="62" className="model-solid" /><text x="98" y="157">固态</text>
        <circle cx="360" cy="150" r="62" className="model-liquid" /><text x="338" y="157">液态</text>
        <circle cx="600" cy="150" r="62" className="model-gas" /><text x="578" y="157">气态</text>
        <path d="M185 125 L292 125" className="model-arrow" markerEnd={`url(#${arrowId})`} /><text x="213" y="112">熔化</text>
        <path d="M295 178 L188 178" className={active(1)} markerEnd={`url(#${arrowId})`} /><text x="213" y="205" className={active(1)}>凝固</text>
        <path d="M425 125 L532 125" className={active(1)} markerEnd={`url(#${arrowId})`} /><text x="453" y="112" className={active(1)}>汽化</text>
        <path d="M535 178 L428 178" className={active(1)} markerEnd={`url(#${arrowId})`} /><text x="453" y="205" className={active(1)}>液化</text>
        <path d="M155 82 Q360 6 565 82" className={active(2)} markerEnd={`url(#${arrowId})`} /><text x="337" y="42" className={active(2)}>升华</text>
        <path d="M565 220 Q360 294 155 220" className={active(2)} markerEnd={`url(#${arrowId})`} /><text x="337" y="282" className={active(2)}>凝华</text>
      </> : <>
        <path d="M55 220 Q170 175 280 220 T500 220 T700 220" className="model-water" /><text x="70" y="260">海洋、河湖、地表</text>
        <ellipse cx="420" cy="78" rx="116" ry="42" className="model-cloud" /><text x="385" y="85">云滴 / 冰晶</text>
        <path d="M180 210 Q190 95 335 85" className="model-arrow" markerEnd={`url(#${arrowId})`} /><text x="160" y="125">汽化</text>
        <path d="M485 115 Q560 160 590 210" className={active(1)} markerEnd={`url(#${arrowId})`} /><text x="545" y="150" className={active(1)}>降水</text>
        <text x="310" y="145" className={active(2)}>液化 / 凝华</text>
      </>}
    </svg>
  )

  if (kind === 'melting-curve' || kind === 'boiling-curve') return (
    <svg viewBox="0 0 440 300" role="img" aria-label={kind === 'melting-curve' ? '晶体熔化曲线' : '水沸腾曲线'}>
      <Axes />
      <path d={kind === 'melting-curve' ? 'M105 220 L190 150 L285 150 L345 82' : 'M105 220 Q190 105 275 88 L350 88'} className="model-curve" />
      <line x1={kind === 'melting-curve' ? '188' : '266'} y1={kind === 'melting-curve' ? '150' : '88'} x2="350" y2={kind === 'melting-curve' ? '150' : '88'} className={active(1)} />
      <text x="195" y={kind === 'melting-curve' ? '136' : '72'} className={active(1)}>{kind === 'melting-curve' ? '熔化平台：吸热，温度不变' : '沸点平台：继续吸热'}</text>
    </svg>
  )

  if (['light-ray', 'reflection', 'mirror-symmetry', 'refraction', 'lenses', 'image-zones'].includes(kind)) return (
    <svg viewBox="0 0 720 320" role="img" aria-label="光学模型图">
      <defs><marker id={arrowId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" /></marker></defs>
      {kind === 'light-ray' && <>
        <circle cx="90" cy="160" r="30" className="model-light" /><text x="65" y="215">光源</text>
        {[270,360,450].map((x,i)=><g key={x}><rect x={x} y="80" width="12" height="160" className="model-screen"/><circle cx={x+6} cy="160" r="11" className="model-hole" /><text x={x-3} y="265">{i+1}</text></g>)}
        <line x1="120" y1="160" x2="630" y2="160" className="model-ray" markerEnd={`url(#${arrowId})`} />
      </>}
      {kind === 'reflection' && <>
        <line x1="85" y1="242" x2="635" y2="242" className="model-mirror" />
        <line x1="360" y1="40" x2="360" y2="270" className="model-normal" />
        <line x1="155" y1="60" x2="360" y2="242" className="model-ray" markerEnd={`url(#${arrowId})`} />
        <line x1="360" y1="242" x2="565" y2="60" className={active(2)} markerEnd={`url(#${arrowId})`} />
        <path d="M312 200 A66 66 0 0 1 360 176 M360 176 A66 66 0 0 1 408 200" className="model-angle" />
        <text x="278" y="176">入射角</text><text x="410" y="176" className={active(2)}>反射角</text><text x="370" y="55">法线</text>
      </>}
      {kind === 'mirror-symmetry' && <>
        <line x1="360" y1="35" x2="360" y2="285" className="model-mirror" /><text x="340" y="308">镜面</text>
        <circle cx="205" cy="112" r="28" className="model-person" /><line x1="205" y1="140" x2="205" y2="230" className="model-body" /><text x="165" y="265">物体</text>
        <circle cx="515" cy="112" r="28" className="model-virtual" /><line x1="515" y1="140" x2="515" y2="230" className="model-virtual" /><text x="475" y="265" className={active(2)}>虚像</text>
        <line x1="205" y1="185" x2="515" y2="185" className="model-normal" /><text x="310" y="174">物距 = 像距</text>
      </>}
      {kind === 'refraction' && <>
        <rect x="0" y="160" width="720" height="160" className="model-water-fill" /><line x1="0" y1="160" x2="720" y2="160" className="model-interface" />
        <line x1="360" y1="30" x2="360" y2="300" className="model-normal" />
        <line x1="160" y1="40" x2="360" y2="160" className="model-ray" markerEnd={`url(#${arrowId})`} />
        <line x1="360" y1="160" x2="465" y2="290" className={active(1)} markerEnd={`url(#${arrowId})`} />
        <text x="595" y="65">空气</text><text x="595" y="205">水</text><text x="430" y="235" className={active(1)}>向法线偏</text>
      </>}
      {kind === 'lenses' && <>
        <line x1="40" y1="160" x2="680" y2="160" className="model-axis" />
        {phase < 2 ? <>
          <path d="M340 45 Q290 160 340 275 Q390 160 340 45" className="model-lens" />
          {[105,160,215].map(y=><line key={y} x1="60" y1={y} x2="340" y2={y} className="model-ray" markerEnd={`url(#${arrowId})`} />)}
          <line x1="340" y1="105" x2="560" y2="160" className={active(1)} /><line x1="340" y1="160" x2="560" y2="160" className={active(1)} /><line x1="340" y1="215" x2="560" y2="160" className={active(1)} />
          <circle cx="560" cy="160" r="8" className="model-focus" /><text x="550" y="190">实焦点 F</text>
        </> : <>
          <path d="M315 45 Q365 160 315 275 L365 275 Q315 160 365 45 Z" className="model-lens" />
          {[105,160,215].map(y=><line key={y} x1="60" y1={y} x2="315" y2={y} className="model-ray" markerEnd={`url(#${arrowId})`} />)}
          <line x1="315" y1="105" x2="610" y2="55" className="model-ray" /><line x1="315" y1="160" x2="610" y2="160" className="model-ray" /><line x1="315" y1="215" x2="610" y2="265" className="model-ray" />
          <line x1="315" y1="105" x2="155" y2="132" className="model-normal" /><line x1="315" y1="215" x2="155" y2="188" className="model-normal" />
          <circle cx="155" cy="160" r="7" className="model-focus" /><text x="115" y="190">虚焦点 F</text>
        </>}
      </>}
      {kind === 'image-zones' && <>
        <line x1="40" y1="180" x2="680" y2="180" className="model-axis" />
        <path d="M360 55 Q320 180 360 305 Q400 180 360 55" className="model-lens" />
        {[120,240,480,600].map((x,i)=><g key={x}><line x1={x} y1="165" x2={x} y2="195" className="model-tick"/><text x={x-14} y="220">{i===0||i===3?'2F':'F'}</text></g>)}
        <path d="M80 180 L80 75 L68 93 M80 75 L92 93" className="model-object-arrow" />
        <path d="M520 180 L520 230 L508 212 M520 230 L532 212" className={active(2)} />
        <line x1="80" y1="75" x2="360" y2="75" className="model-ray" /><line x1="360" y1="75" x2="520" y2="230" className={active(2)} />
      </>}
    </svg>
  )

  if (kind === 'density-cubes' || kind === 'density-measurement') return (
    <svg viewBox="0 0 720 300" role="img" aria-label="密度模型图">
      {kind === 'density-cubes' ? <>
        <rect x="90" y="75" width="150" height="150" rx="12" className="model-cube light" /><text x="130" y="155">同体积</text><text x="125" y="260">质量较小</text>
        <rect x="480" y="75" width="150" height="150" rx="12" className="model-cube heavy" /><text x="520" y="155">同体积</text><text x="515" y="260">质量较大</text>
        <text x="280" y="135">比较每1 cm³</text><text x="300" y="175" className={active(2)}>ρ = m / V</text>
      </> : <>
        <path d="M70 110 L250 110 L225 210 L95 210 Z" className="model-balance" /><text x="120" y="160">天平：m</text>
        <path d="M360 60 L510 60 L495 230 L375 230 Z" className="model-cylinder" /><rect x="378" y="145" width="114" height="80" className="model-water-fill" /><circle cx="435" cy="174" r="30" className={active(1)} /><text x="365" y="265">V = V₂ − V₁</text>
        <text x="550" y="155" className={active(2)}>ρ = m / V</text>
      </>}
    </svg>
  )

  if (kind === 'liquid-density') return (
    <svg viewBox="0 0 720 300" role="img" aria-label="液体密度测量流程图">
      <rect x="35" y="75" width="155" height="125" rx="14" className="model-balance" />
      <text x="62" y="125">空杯 m容</text><text x="72" y="165">40 g</text>
      <text x="205" y="145" className={active(1)}>＋液体</text>
      <rect x="290" y="75" width="155" height="125" rx="14" className="model-balance" />
      <text x="307" y="125">总质量 m总</text><text x="330" y="165">94 g</text>
      <text x="465" y="128" className={active(1)}>相减</text><text x="455" y="162">m液=54 g</text>
      <path d="M585 55 L675 55 L665 220 L595 220 Z" className="model-cylinder" />
      <rect x="598" y="130" width="64" height="86" className="model-water-fill" />
      <text x="595" y="255">V=60 cm³</text>
      <text x="245" y="270" className={active(2)}>ρ = (m总 − m容) / V = 0.90 g/cm³</text>
    </svg>
  )

  return null
}

function ComicStrip({ explainer, phase }: { explainer: VisualExplainer; phase: number }) {
  const icons = ICONS[explainer.diagram_kind] || ['🔎', '💡', '✅']
  return (
    <div className="comic-strip" aria-label={`${explainer.title}漫画三格`}>
      {explainer.stages.map((stage, index) => (
        <div className={`comic-panel ${phase === index ? 'active' : ''}`} key={stage}>
          <span className="comic-number">{index + 1}</span>
          <div className="comic-icon" aria-hidden="true">{icons[index] || '💡'}</div>
          <p>{stage}</p>
        </div>
      ))}
    </div>
  )
}

export default function PhysicsVisualExplainer({ lessonId }: { lessonId: string }) {
  const explainer = useMemo(() => explainers.find(item => item.lesson_id === lessonId), [lessonId])
  const [phase, setPhase] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => { setPhase(0); setPlaying(false) }, [lessonId])
  useEffect(() => {
    if (!playing || !explainer) return
    const timer = window.setInterval(() => {
      setPhase(current => {
        if (current >= explainer.stages.length - 1) {
          setPlaying(false)
          return current
        }
        return current + 1
      })
    }, 2800)
    return () => window.clearInterval(timer)
  }, [playing, explainer])

  if (!explainer) return null

  return (
    <section className="visual-explainer" aria-labelledby={`visual-${lessonId}`}>
      <div className="visual-heading">
        <div><span className="visual-kicker">原创轻漫画图解 · 先有画面，再建模型</span><h2 id={`visual-${lessonId}`}>{explainer.title}</h2></div>
        <span className="visual-lesson-id">{lessonId}</span>
      </div>
      <p className="visual-question">这张图要解决：{explainer.abstract_point}</p>

      <ComicStrip explainer={explainer} phase={phase} />
      <div className="model-diagram"><ModelDiagram kind={explainer.diagram_kind} phase={phase} /></div>
      <PrincipleGuide explainer={explainer} phase={phase} />

      <div className="visual-controls" aria-label="图解播放控制">
        <button onClick={() => { setPlaying(false); setPhase(Math.max(0, phase - 1)) }} disabled={phase === 0}>上一格</button>
        <span>第 {phase + 1} / {explainer.stages.length} 格</span>
        <button className="play" onClick={() => { if (phase === explainer.stages.length - 1) setPhase(0); setPlaying(!playing) }}>{playing ? '暂停' : '自动播放'}</button>
        <button onClick={() => { setPlaying(false); setPhase(Math.min(explainer.stages.length - 1, phase + 1)) }} disabled={phase === explainer.stages.length - 1}>下一格</button>
      </div>

      <div className="analogy-grid">
        <div className="analogy-card everyday"><strong>漫画怎么说</strong><p>{explainer.analogy}</p></div>
        <div className="analogy-card formal"><strong>物理真正怎么说</strong><p>{explainer.physics_truth}</p></div>
      </div>
      <div className="analogy-boundary"><strong>⚠ 比喻到这里就停：</strong>{explainer.boundary}</div>
      <div className="memory-hook"><span>一句话钩子</span><strong>{explainer.memory_hook}</strong></div>
    </section>
  )
}
