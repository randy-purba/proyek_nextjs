
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

export default (props) => {

    const { 
      modalIsOpen, toggleModal, children, classNameModal, styleModal, 
      sizeModal,titleModalHeader, centeredModal, showModalFooter, onClickButtonCancel, onClickButtonSubmit
    } = props

    return (
        <Modal isOpen={modalIsOpen} toggle={toggleModal} className={classNameModal} 
          style={styleModal} size={sizeModal} centered={centeredModal}>
          <ModalHeader toggle={toggleModal}>{titleModalHeader}</ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          { showModalFooter ? 
            <ModalFooter>
              <Button color="secondary" onClick={toggleModal}>Cancel</Button>
              <Button color="primary" onClick={onClickButtonSubmit}>Submit</Button>
            </ModalFooter> : ""
          }
        </Modal>
    )
}