export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'Inacreditável!',
  'Incrível!',
  'Vc está demais!',
  'Fantástico!',
]
export const GAME_COPIED_MESSAGE = 'Copiado!'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Não há letras suficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'O modo difícil só pode ser ativado antes de começar o jogo'
export const HARD_MODE_DESCRIPTION =
  'Letras descorbertas deverão obrigatoriamente ser usadas na próxima tentativa'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Modo de alto contraste'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Precisa usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Sua tentativa deve incluir ${letter}`
export const ENTER_TEXT = 'Tentar'
export const DELETE_TEXT = 'Apagar'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de tentativas'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Clique para transferir suas palavras para outro dispositivo'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de acertos'
export const CURRENT_STREAK_TEXT = 'Sequência atual'
export const BEST_STREAK_TEXT = 'Melhor sequência'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Você está usando um navegador interno do app isso pode causar problemas ao compartilhar ou salvar seus resultados. Incentivamos a usar o navegador padrão do seu dispositivo.'
