import { Fragment, type ReactNode } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  title: string
  children: ReactNode
  isOpen: boolean
  handleClose: () => void
}

export const BaseModal = ({ title, children, isOpen, handleClose }: Props) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleClose}>
        <div className="flex items-center justify-center min-h-screen py-10 px-4 text-center sm:block sm:p-0">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 dark:bg-gray-800">
              <button
                onClick={() => handleClose()}
                tabIndex={0}
                aria-pressed="false"
                className="absolute right-4 top-4"
              >
                <XCircleIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
              </button>
              <div>
                <div className="text-center">
                  <DialogTitle
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
