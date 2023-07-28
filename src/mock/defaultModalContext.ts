import { createRef } from 'react'
import { IModalContext, Modal } from '../types/types'

const defaultModalContext: IModalContext<Modal> = {
  params: undefined,
  template: '',
  modalRef: createRef(),
  modals: [],
  showModal() {
    throw new Error('Not implemented')
  },
  hideModal() {
    throw new Error('Not implemented')
  },
  feed: {
    callback() {
      throw new Error('Not implemented')
    },
    onError() {
      throw new Error('Not implemented')
    },
    data: {
      title: ''
    }
  }
}

export default defaultModalContext
