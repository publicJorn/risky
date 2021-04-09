import { GameContext, useGameStore } from './store'
import GameMap from './map/Map'
import Actions from './actions/Actions'
import Meta from './meta/Meta'
import {
  Scene,
  Header,
  Display,
  MetaArea,
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
          <MetaArea>
            <Meta />
          </MetaArea>
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
