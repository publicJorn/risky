import styled from 'styled-components'
import { Phase } from 'app/game/store'
import { Selected } from 'app/game/store/DistrictModel'

export const MapSvg = styled.svg`
  ${(p: { svgStyle: string }) => p.svgStyle};
  width: 100%;
  height: 100%;
  pointer-events: all;
`

type PathProps = {
  svgStyle: string
  selected: number
  phase: string
}

export const Path = styled.path`
  ${(p: PathProps) => p.svgStyle};

  ${(p: PathProps) =>
    p.selected === Selected.Primary
      ? p.phase === Phase.Recruit
        ? 'fill: lightgreen;'
        : 'fill: lightskyblue'
      : ''}

  ${(p: PathProps) =>
    p.selected === Selected.Secondary
      ? p.phase === Phase.Attack
        ? 'fill: red;'
        : 'fill: lightgreen;'
      : ''}
`

export const SoldierSvg = styled.svg`
  pointer-events: none;
`
