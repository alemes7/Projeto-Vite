import Header from "../componentes/header";
import Conteudo from "../componentes/Conteudo";

function Painel() {
    return (
        <>
        <Header btn={true} />
        <Conteudo>
            <h2>Lista de Funcionarios</h2>
            <Tabela/>
        </Conteudo>
        </>
    )
}

export default Painel