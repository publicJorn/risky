import styled from 'styled-components'

export const Svg = styled.svg`
  ${(p: { svgStyle: string }) => p.svgStyle};
  width: 100%;
  height: 100%;
  pointer-events: all;
`

type PathProps = {
  svgStyle: string
  isSelected?: boolean
}

export const Path = styled.path`
  ${(p: PathProps) => p.svgStyle}
  ${(p: PathProps) =>
    p.isSelected === true &&
    `
      fill: lime;
      stroke: green;
    `}
`
