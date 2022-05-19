import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"
import { createInscription } from "../../services/Inscriptions.service"

const initialFormData = {
        userName: '',
        userEmail: ''
    }


export function InscriptionForm ({ pacoteId, onRegister }) {
    const [showSucess, setShowSucess] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (event) => {
        setFormData({
            ... formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setErrorMsg(undefined)
            setIsSubmiting(true)
            await createInscription({
                name: formData.userName,
                email: formData.userEmail, 
                pacoteId: parseInt(pacoteId)
            })
            setShowSucess(true)
            setFormData(initialFormData)
            onRegister()
        } catch (err) {
            setErrorMsg('Falha ao fazer inscrição. Tente novamente.')
        setIsSubmiting(false)
        }
    }
    return (
        <>
        <h2>Formulário de inscrição</h2>
        {showSucess && (
            <Alert variant="sucess" dismissible onClose={() => setShowSucess(false)}>Comprado com sucesso.</Alert>
        )}
        {errorMsg && (
            <Alert variant="danger">{errorMsg}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="inscription-name" className="mb-3">
                <Form.Label className="m-0">Nome</Form.Label>
                <Form.Control
                placeholder="Informe seu nome"
                value={formData.userName}
                onChange={handleChange}
                name="userName"
                />
            </Form.Group>
            <Form.Group controlId="inscription-email" className="mb-3">
                <Form.Label className="m-0">E-mail</Form.Label>
                <Form.Control
                type='email'
                placeholder="exemplo@exemplo.com"
                value={formData.userEmail}
                onChange={handleChange}
                name="userEmail"
                />
            </Form.Group>
            <Button type='submit' disabled={isSubmiting}>Inscrever</Button>
        </Form>
        </>
    )
}