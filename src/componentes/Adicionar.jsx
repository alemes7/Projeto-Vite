import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/esm/ModalBody'
import Formulario from './Formulario'

function Adicionar(){
    return (
        <>
            <Modal>
                <Modal.Header>
                    <h4>Adicionar</h4>
                </Modal.Header>
                <ModalBody>
                    <Formulario />
                </ModalBody>
            </Modal>
        </>
    )
}