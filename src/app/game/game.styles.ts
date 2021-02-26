import styled from 'styled-components'

export const Scene = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.header`
  background-color: mediumpurple;
`

export const Display = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`

export const ChatArea = styled.aside`
  width: 15rem;
  background-color: lime;
`

export const MapArea = styled.main`
  flex: 1 1 auto;
  background-color: cyan;
`

export const ActionArea = styled.aside`
  width: 15rem;
  background-color: hotpink;
`
