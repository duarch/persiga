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

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="R" />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra C está na posição correta. Ou seja a palavra secreta também tem
        a letra C neste mesmo lugar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell value="Ó" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="X"
          status="present"
        />
        <Cell value="I" />
        <Cell value="M" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Neste caso a palavra secreta tem a letra X, mas não nesta posição. Tente
        outra palavra que tenha a letra X mas em outro lugar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="I" />
        <Cell value="V" />
        <Cell value="E" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="S" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Pode esquescer a letra R, pois ela não está na palavra secreta.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Dedico este app as minhas duas mães
        <br />
        &#x1FAF6; Graça e Geysse &#x1FAF6;
        <br />
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
