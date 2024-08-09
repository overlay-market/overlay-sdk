import styled from '@emotion/styled'

export const FlexContainer = styled.div<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
  borderTop?: string
  borderBottom?: string
  gap?: string
}>`
  display: flex;
  position: relative;
  width: ${({width}) => width ?? '100%'};
  align-items: ${({align}) => align ?? 'center'};
  justify-content: ${({justify}) => justify ?? 'flex-start'};
  padding: ${({padding}) => padding};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
  border-top: ${({borderTop}) => borderTop ?? borderTop};
  border-bottom: ${({borderBottom}) => borderBottom ?? borderBottom};
  gap: ${({gap}) => gap ?? gap};
`

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`

export const FlexRow = styled(FlexContainer)`
  flex-direction: row;
`
