import { Alert } from "react-bootstrap";
//Todo componente React deve iniciar com letra maiúscula

export default function Cabecalho(props) {
    //props = propriedades do componente
    // {} o que está dentro das chaves é javascript
    //    o que estiver fora é html
    return (   //É a aparência do componente
        <div>
            <Alert variant='light' className="text-center"><h2>{props.titulo || 'Informe um texto para o cabeçalho'}</h2></Alert>
        </div>
    );

}