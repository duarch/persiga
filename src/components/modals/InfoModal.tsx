import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <strong>É simples mas tem que ler! </strong>
        Adivinhe a palavra secreta em 6 tentativas. Após cada tentativa, as
        cores da palavra vão mostrar o quanto você acertou da palavra secreta.
      </p>

      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra C está na posição correta. Ou seja a palavra secreta também tem
        a letra C neste mesmo lugar.
      </p>

      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell value="Q" />
        <Cell value="U" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="S" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Neste caso a palavra secreta tem a letra A, mas não nesta posição. Tente
        outra palavra que tenha a letra A mas em outro lugar.
      </p>

      <div className="grid grid-cols-5 gap-1 mb-1 mt-4">
        <Cell value="O" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Pode esquescer a letra R, pois ela não está na palavra secreta.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Esta é uma versão open source do jogo WORDLE em português -
        <a
          href="https://github.com/duarch/persiga"
          className="underline font-bold"
        >
          Codigo disponível no GitHub.
        </a>{' '}
      </p>
    </BaseModal>
  )
}
