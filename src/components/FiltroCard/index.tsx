import * as S from './styles'

export type Props = {
  ativo: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>10</S.Contador>
    <S.Label>Itens</S.Label>
  </S.Card>
)

export default FiltroCard
