import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Header } from './lobby.styles'

const Lobby = (): JSX.Element => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/')

    ws.onopen = () => {
      console.log('websocket is connected!!')
    }

    ws.onmessage = (evt) => {
      const { action, data } = JSON.parse(evt.data)
      console.log(action, data)
    }
  }, [])

  return (
    <Wrapper>
      <Header>
        <h1>Risky</h1>
      </Header>

      <main>
        <p>
          Go to <Link to="/game">game dev</Link> page
        </p>
      </main>
    </Wrapper>
  )
}

export default Lobby
