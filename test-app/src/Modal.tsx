import React from 'react'
import { useModal } from './ModalContext'
import { InferFeed } from './types/types'

export default function Modal() {
  const { hideModal, modalRef, selectedModalName, modals, feed } = useModal()

  // on récupère la vue grâce à un petit tricks Typescript
  const modalComponent = modals.find(e => e.name === selectedModalName)
  const Component = modalComponent
    ? (modalComponent.component as React.FC<{ props: InferFeed<typeof selectedModalName> }>)
    : null

  function closeWhenClickedOutside(e: React.MouseEvent) {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect()
      if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
        hideModal()
      }
    }
  }

  return (
    <dialog ref={modalRef} data-modal onClick={closeWhenClickedOutside}>
      {Component && <Component props={feed} />}
    </dialog>
  )
}
