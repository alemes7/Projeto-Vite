import FormControl from "react-bootstrap/FormControl"
import Conteudo from "../components/Conteudo"
import Header from "../components/header"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from "react-bootstrap/Alert"

function Login(){

    const [alert, setalert] = useState(false)

    function Autenticar(event) {
        event.preventDefault()
        const email = event.target[0].value
        const pass = event.target[1].value

        if (email === "admin@admin" && pass === "123") {
            localStorage.setItem("key", "token")
            location.href = "/Painel"
        }
        else{
            setalert(true)
            setTimeout(() => {
                setalert(false)
            }, 3000)
        }
    }
    return(
        <>
            <Header btn={false}/>
            <Conteudo>
                <h2>Login</h2>
                <Form onSubmit={Autenticar}>
                    <Form.Group>
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <FormControl type="email" placeholder="Insira seu email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-3">
                            Senha:
                        </Form.Label>
                        <FormControl type="password" placeholder="Insira sua senha" required/>
                    </Form.Group>
                    <Button className="mt-3" type="submit">Login</Button>
                    //prova
                    {alert ? <Alert className="mt-3" variant="danger">Usuário e senha incorretos.</Alert>: ""}
                </Form>
            </Conteudo>
        </>
    )
}
export default Login