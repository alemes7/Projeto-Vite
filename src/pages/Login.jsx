import Header from "../components/Header"
import Conteudo from "../components/conteudo"
import Form from 'react-bootstrap/Form'
import Button  from "react-bootstrap/Button"
import { useState } from "react"
import Alert from 'react-bootstrap/Alert'

function Login() {
    const [showAlert, setShowAlert] = useState(false);

    function Autenticar(event) {
        event.preventDefault();
        const email = event.target[0].value
        const senha = event.target[1].value

        if (email === 'admin@admin' && senha === '123') {
            localStorage.setItem('key','token')
            location.href = '/painel'
        } else {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
        }
    }

    return (
        <>
        <Header btn={false} />
        <Conteudo>
            <h2>Login</h2>
            <Form onSubmit={Autenticar}>
                <Form.Group>
                    <Form.Label className="mt-2">Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-2">Senha:</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua Senha" required />
                </Form.Group>
                <Button type="submit" className="mt-3">Login</Button>
                {showAlert ? (<Alert variant="danger" className="mt-3">Email ou senha inválidos</Alert>) : ''}
            </Form>
        </Conteudo>
        </>
    )
}

export default Login