import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/esm/ModalBody'
import Formulario from './Formulario'

function Adicionar({show, setShow}){
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h4>Adicionar</h4>
                </Modal.Header>
                <ModalBody>
                    <Formulario />
                </ModalBody>
            </Modal>
        </>
    )
}

export default Adicionar