import React from 'react'
import { useModal } from './ModalContext'

export default function Modal() {
  const { hideModal, modalRef } = useModal()

  // on récupère la vue grâce à un petit tricks Typescript
  // const Component = template ? (modals[template] as React.FC<{ props: InferFeed<typeof template> }>) : null

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
      {/* {Component && <Component props={feed} />} */}
    </dialog>
  )
}
