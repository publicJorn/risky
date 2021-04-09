import styled from 'styled-components'
import DevPanel from '../../components/DevPanel'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

function Meta(): JSX.Element {
  return (
    <Wrapper>
      <p>players turn & chat </p>
      <DevPanel />
    </Wrapper>
  )
}

export default Meta
