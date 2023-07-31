import React, { createContext, useContext, useMemo, useRef, useState } from 'react'
import defaultModalContext from './mock/defaultModalContext'
import { IModalContext, InferFeed, Modal, ModalParams, ModalProviderProps, UserModal } from './types/types'

export const ModalContext = createContext<IModalContext<Modal>>(defaultModalContext)

// hook utilisé côté client
export const useModal = (): IModalContext<Modal> => useContext(ModalContext)

function ModalProvider({ children, data }: ModalProviderProps) {
  const [modalParams, setModalParams] = useState<ModalParams>()
  const [selectedModalName, setSelectedModalName] = useState<Modal>('')
  const modalRef = useRef<HTMLDialogElement>(null)
  const [feed, setFeed] = useState<InferFeed<Modal>>({
    callback: () => {
      throw new Error('Not implemented')
    },
    onError: () => {
      throw new Error('Not implemented')
    },
    data: {
      title: ''
    }
  })

  // liste de l'ensemble des modales, auxquelles on fait correspondre le composant à afficher
  const modals = useMemo<UserModal[]>(
    () => [
      // toujours disponible par défaut
      {
        name: 'Empty',
        component: () => <></>
      },

      ...data.map(userModalFunction => userModalFunction())
    ],
    [data]
  )

  function showModal<T extends Modal>(modalName: T, feed: InferFeed<T>, params?: ModalParams) {
    if (modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal()
    }

    setSelectedModalName(modalName)
    setFeed(feed)
    setModalParams(params)
  }

  function hideModal() {
    if (modalRef.current) {
      modalRef.current.close()
    }

    setModalParams(undefined)
    setSelectedModalName('Empty')
  }

  return (
    <ModalContext.Provider
      value={{
        params: modalParams,
        selectedModalName,
        modalRef,
        modals,
        showModal,
        hideModal,
        feed
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
