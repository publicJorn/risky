import { createContext, useContext } from 'react'
import createGameStore from './GameStore'
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

export const GameContext = createContext(createGameStore())

const Game = (): JSX.Element => {
  const store = useContext(GameContext)

  return (
    <GameContext.Provider value={store}>
      <Scene>
        <Header>header</Header>
        <Display>
          <ChatArea>chat</ChatArea>
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
