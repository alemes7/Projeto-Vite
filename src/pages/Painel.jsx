import Header from "../componentes/Header";
import Conteudo from "../componentes/Conteudo";
import Tabela from "../componentes/tabela";

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