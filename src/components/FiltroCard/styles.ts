import styled from 'styled-components'

import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#A1A1A1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
