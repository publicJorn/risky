import { GameContext, useGameStore } from './store'
import GameMap from './map/Map'
import Actions from './actions/Actions'
import {
  Scene,
  Header,
  Display,
  ChatArea,
  MapArea,
  ActionArea,
} from './game.styles'

const Game = (): JSX.Element => {
  const store = useGameStore()

  return (
    <GameContext.Provider value={store}>
      <Scene>
        <Header>header</Header>
        <Display>
          <ChatArea>players turn & chat</ChatArea>
          <MapArea>
            <GameMap />
          </MapArea>
          <ActionArea>
            <Actions />
          </ActionArea>
        </Display>
      </Scene>
    </GameContext.Provider>
  )
}

export default Game
