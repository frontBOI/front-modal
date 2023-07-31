import { RefObject, ReactNode, FC } from 'react'

export type Modal = string

// ce qui est fourni par l'utilisateur en entrée
type UserModal = {
  name: string
  component: FC
}

// lie chaque modale avec le type de "feed". Cela permet de notamment faire passer le type
// de "data" au moment où un showModal() est appelé
type Feeds = Record<Modal, Feed>

// données additionnelles à passer à une modale
export interface ModalParams {
  isFullScreen?: boolean
}

// donnée par défaut dans l'objet "data"
interface DefaultFeedData {
  title: string
}

// contenu de l'objet "feed" passé à une modale
export interface Feed<Data extends Record<string, any> = Record<string, any>> {
  callback: (...args: any) => void | Promise<void>
  onError?: (e?: any) => void
  data: Data & DefaultFeedData
}

// Use the mapped type to infer the type of feed based on Modal
export type InferFeed<T extends Modal> = Feeds[T]

// ce qui est rendu accessible par le ModalProvider
export interface IModalContext<T extends Modal> {
  selectedModalName: T
  feed: InferFeed<T>
  params?: ModalParams
  modalRef: RefObject<HTMLDialogElement> // sert à savoir si la dialog HTML 5 est déjà ouverte ou non
  modals: UserModal[]
  hideModal(): void
  showModal<T extends Modal>(modalName: T, feed: InferFeed<T>, params?: ModalParams): void
}

// les props du ModalProvider
export interface ModalProviderProps {
  children: ReactNode
  data: ((...args: any[]) => UserModal)[]
}
