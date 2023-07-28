import React, { createContext, useContext, useMemo, useRef, useState } from 'react'
import defaultModalContext from './mock/defaultModalContext'
import { Feed, IModalContext, InferFeed, Modal, ModalParams, ModalProviderProps, UserModal } from './types/types'

export const ModalContext = createContext<IModalContext<Modal>>(defaultModalContext)

// hook utilisé côté client
export const useModal = (): IModalContext<Modal> => useContext(ModalContext)

function ModalProvider({ children, data }: ModalProviderProps) {
  const [modalParams, setModalParams] = useState<ModalParams>()
  const [template, setTemplate] = useState<Modal>('')
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
  const modals: UserModal[] = []
  // useMemo<Record<Modal, React.JSX.Element & Feed>>(
  //   () => ({
  //     EMPTY: () => <></>, // toujours disponible par défaut
  //     ...data.map(ModalAndFeed => ({ [ModalAndFeed.name]: ModalAndFeed.component }))
  //   }),
  //   [data]
  // )

  function showModal<T extends Modal>(view: T, feed: InferFeed<T>, params?: ModalParams) {
    if (modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal()
    }

    setTemplate(view)
    setFeed(feed)
    setModalParams(params)
  }

  function hideModal() {
    if (modalRef.current) {
      modalRef.current.close()
    }

    setModalParams(undefined)
    // setTemplate(modals.EMPTY)
  }

  return (
    <ModalContext.Provider
      value={{
        params: modalParams,
        template,
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
