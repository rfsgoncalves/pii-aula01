import Pagina from "../templates/Pagina";
import FormCadastroCliente from "../telas/formularios/FormCadastroCliente";

export default function TelaCadastroCliente(props) {
    return (
        <Pagina titulo="Tela de Cadastro de Clientes">
            <FormCadastroCliente/>
        </Pagina>
    )
}