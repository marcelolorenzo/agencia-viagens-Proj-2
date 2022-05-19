import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function RegisterForm () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (event) => {
        setFormData({
            ... formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <p className="h4">Cadastre-se</p> 
        <Form.Group controlId="register-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
                />
            </Form.Group>
        <Form.Group controlId="register-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                type='email'
                placeholder="exemplo@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                />
            </Form.Group>
            <Form.Group controlId="register-password" className="mb-3">
                <Form.Label className="m-0">Senha</Form.Label>
                <Form.Control
                type='password'
                placeholder="Senha de acesso"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
                />
            </Form.Group>
            <Button type='submit'>Criar conta</Button>
        </Form>
    )
}