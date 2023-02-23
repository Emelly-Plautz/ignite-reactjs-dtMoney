import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import { NewTransationModal } from '../NewTransationModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton> Nova transação </NewTransationButton>
          </Dialog.Trigger>

          <NewTransationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
