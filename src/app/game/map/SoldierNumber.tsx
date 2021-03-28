import { useRef, useState, useEffect } from 'react'
import { SoldierSvg } from './map.styles'

type Props = WithChildren<{
  nr: number
  districtDimensions: SVGRect
}>

function SoldierNumber({ nr, districtDimensions }: Props): JSX.Element | null {
  const refSvg = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState<ClientRect | undefined>(
    undefined,
  )
  const [pos, setPos] = useState({ x: 0, y: 0 })

  // Soldier dimensions relative to map dimensions which in turn depends on screen size
  useEffect(() => {
    setDimensions(refSvg.current?.getBoundingClientRect())
  }, [])

  useEffect(() => {
    if (!dimensions) return

    const { x, y, width, height } = districtDimensions

    setPos({
      x: x + width / 2 - dimensions.width / 2,
      y: y + height / 2 - dimensions.height / 2,
    })
  }, [dimensions])

  return (
    <SoldierSvg
      ref={refSvg}
      width="80"
      viewBox="0 0 802 1062"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      preserveAspectRatio="xMinYMin meet"
      x={pos.x}
      y={pos.y}
    >
      <use href="#soldierpath" />
      <text
        x="764.817"
        y="1030.06"
        fontFamily="'ArialMT','Arial',sans-serif"
        fontSize="260"
        transform="matrix(.5 0 0 .5003 -94.576 19.61)"
      >
        {nr}
      </text>
    </SoldierSvg>
  )
}

export default SoldierNumber
