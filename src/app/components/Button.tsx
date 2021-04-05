import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid #000;
  background: #fff;
`

type Props = React.ComponentProps<'button'> // & { variant: string }

function Button({ children, onClick, ...props }: Props): JSX.Element {
  const typedProps = props as React.HTMLAttributes<HTMLButtonElement>
  return (
    <StyledButton onClick={onClick} {...typedProps}>
      {children}
    </StyledButton>
  )
}

export default Button
