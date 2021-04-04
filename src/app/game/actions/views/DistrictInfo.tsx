import styled from 'styled-components'

type Props = {
  name?: string
  owner?: number
  troops?: number
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
  line-height: 1.31;

  &:first-child {
    margin-bottom: 0.5rem;
    font-size: ${(p) => p.theme.fontSizeMedium};
    line-height: 1.15;
  }
`

function DistrictInfo({
  name = '',
  owner = 0,
  troops = 0,
}: Props): JSX.Element {
  return (
    <Wrapper>
      {name ? (
        <List>
          <Item>{name}</Item>
          <Item>Owned by {owner}</Item>
          <Item>Troops: {troops}</Item>
        </List>
      ) : (
        <p>Select a district...</p>
      )}
    </Wrapper>
  )
}

export default DistrictInfo
