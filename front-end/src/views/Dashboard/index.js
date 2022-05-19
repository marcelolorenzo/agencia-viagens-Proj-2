import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";

export function DashboardView () {
    return (
        <LayoutPortal>
        <h1 className="mt-4">Bem-vindo(a) José!</h1>
        <p>Utilize o menu para gerenciar os dados do site.</p>
        <Alert variant="info">Você receberá as instruções da sua viagem por e-mail.</Alert>
        </LayoutPortal>
    )
}