import { useEffect } from 'react'
import { useModal } from './ModalContext'

export default function Tester() {
  const { showModal } = useModal()

  useEffect(() => {
    showModal('Modal', { callback: () => {}, data: { title: '' } })
  }, [])

  return <p>Tester</p>
}
