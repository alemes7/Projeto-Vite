import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react'
import { TfiPencil } from "react-icons/tfi";
import axios from 'axios'
import Formulario from './Formulario';

function Editar({id}){

    const[show, setShow] = useState(false)
    const[funcionario, setFuncionario] = useState([])

    useEffect(() => {
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta) =>{
            setFuncionario(resposta.data)

        }).catch((error)=>{
            console.log(error)
        })

    }, [])

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <TfiPencil size={20} className='text-primary'/>
            </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h4>Editar</h4>
                </Modal.Header>
                <Modal.Body>
                    <Formulario funcionario={funcionario} setShow={setShow} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar