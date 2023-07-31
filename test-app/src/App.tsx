import React from 'react'
import ModalProvider from './ModalContext'
import Modal from './Modal'
import Tester from './Tester'

function App() {
  const modal = () => ({
    name: 'Modal',
    component: () => (
      <div>
        <p>Modal</p>
        <p>Oui c&apos;est bien une modale</p>
      </div>
    )
  })

  return (
    <ModalProvider data={[modal]}>
      <Modal />
      <Tester />
    </ModalProvider>
  )
}

export default App
