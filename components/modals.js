
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

export default (props) => {

    const { 
      modalIsOpen, toggleModal, children, classNameModal, styleModal, 
      sizeModal,titleModalHeader, centeredModal
    } = props

    return (
        <Modal isOpen={modalIsOpen} toggle={toggleModal} className={classNameModal} 
          style={styleModal} size={sizeModal} centered={centeredModal}>
          <ModalHeader toggle={toggleModal}>{titleModalHeader}</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
        </Modal>
    )
}