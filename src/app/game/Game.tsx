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
