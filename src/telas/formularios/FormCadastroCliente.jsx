import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function FormCadastroCliente(props) {
    const [validado, setValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }

        evento.preventDefault();
        evento.stopPropagation();

    }


    return (
        <>
            <div className="border text-center">
                <h3>Formulário de Cadastro de Cliente</h3>
            </div>
            <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            id='nome'
                            name='nome'
                            type="text"
                            placeholder="First name"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type='invalid'>Informe o nome do cliente!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            placeholder="Sobrenome"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Por favor informe o sobrenome</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder=""
                                id="username"
                                name="username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe o username
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Cadastrar</Button>
                <Button type="reset">Limpar</Button>
            </Form>
        </>
    );
}