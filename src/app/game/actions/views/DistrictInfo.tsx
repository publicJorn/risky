import styled from 'styled-components'
import TroopsDelta from 'app/game/components/TroopsDelta'

type Props = {
  name?: string
  owner?: number
  troops?: number
  troopsDelta?: number
}

const Wrapper = styled.div`
  min-height: 6rem;
`

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`

const Item = styled.li`
  font-size: ${(p) => p.theme.fontSizeSmall};
  line-height: 1.15rem;

  &:first-child {
    margin-bottom: 0.5rem;
    font-size: ${(p) => p.theme.fontSizeMedium};
  }
`

function DistrictInfo({
  name = '',
  owner,
  troops,
  troopsDelta,
}: Props): JSX.Element {
  return (
    <Wrapper>
      {name ? (
        <List>
          <Item>{name}</Item>
          <Item>Owned by {owner}</Item>
          <Item>
            Troops: {troops} <TroopsDelta n={troopsDelta} />
          </Item>
        </List>
      ) : (
        <p>Select a district...</p>
      )}
    </Wrapper>
  )
}

export default DistrictInfo
