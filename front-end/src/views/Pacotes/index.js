import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { CardPacotes } from "../../components/CardPacotes";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { getPacotes } from "../../services/Pacotes.service";

export function PacotesView() {
  const [pacotes, setPacotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    const fetchPacotes = async () => {
      try {
        const data = await getPacotes()
        setPacotes(data)
      } catch {
        setErrorMsg('Recarregue a página.')
      }
      setLoading(false)
    }
    fetchPacotes()
  }, [])
  return (
    <Layout>
      <Container>
        <h1 className="text-center mt-4">Pacotes</h1>
        {loading && <Loading />}
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Row>
          {pacotes.map((pacote) => (
            <Col key={pacote.id} className="mb-4" xs={6} md={4} lg={3}>
              <CardPacotes pacote={pacote} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
