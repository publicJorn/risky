import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`

export const Header = styled.header`
  padding: ${(p) => p.theme.spacing05};
  color: ${(p) => p.theme.colorBg};
  background-color: ${(p) => p.theme.colorText};
`
