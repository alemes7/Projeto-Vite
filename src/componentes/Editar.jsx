import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios';
import { MdEdit } from "react-icons/md"
import Formulario from './Formulario'


function Editar({id}) {

    const [show, setShow] = useState(true)

    function editarDados() {
        axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() => location.reload())
        .catch(() => {
            console.log("Erro ao editar.")
        })
    }

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <MdEdit size={20} className="text-primary"/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={editarDados} variant="primary">Editar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar