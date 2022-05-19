import { Alert, Table } from "react-bootstrap";

export function Inscriptions ({ inscriptions }) {
    return (
        <>
        <h2>Pessoas inscritas</h2>
        {inscriptions.length > 0 ? (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {inscriptions.map(inscription => (
                    <tr  key={inscription.id}>
                        <td>{inscription.id}</td>
                        <td>{inscription.name}</td>
                        <td>{inscription.email}</td>
                    </tr>
                ))}
                </tbody>
        </Table>
        ) : (
            <Alert variant="info">Este pacote ainda não possui pessoas inscritas.</Alert>
        )}
        </>
    )
}