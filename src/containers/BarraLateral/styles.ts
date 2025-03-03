import style from 'styled-components'

export const Aside = style.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = style.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = style.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
