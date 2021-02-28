import { useEffect } from 'react'
import useGameState from './gameState'
import GameMap from './map/Map'
import {
  Scene,
  Header,
  Display,
  ChatArea,
  MapArea,
  ActionArea,
} from './game.styles'

const Game = (): JSX.Element => {
  const { districts, initDistricts } = useGameState()

  useEffect(() => initDistricts(), [])

  console.log(districts)

  return (
    <Scene>
      <Header>header</Header>
      <Display>
        <ChatArea>chat</ChatArea>
        <MapArea>
          <GameMap />
        </MapArea>
        <ActionArea>{/* <Actions /> */}</ActionArea>
      </Display>
    </Scene>
  )
}

export default Game
