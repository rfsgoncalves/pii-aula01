import { Container } from "react-bootstrap";
import Cabecalho  from "./Cabecalho";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <Container>
            <Cabecalho titulo={props.titulo}/>
            <Menu/>
            <Container className="p-4 border">
                {
                    //props.children //filhos do componente página
                }
                {props.children}  
            </Container>
        </Container>
    )
}