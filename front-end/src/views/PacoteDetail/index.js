import { useCallback, useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { getPacoteById } from "../../services/Pacotes.service";
import { NotFoundView } from "../NotFound";
import { InscriptionForm } from "./InscriptionForm";
import { Inscriptions } from "./Inscriptions";
import styled from "styled-components";

export function PacoteDetailView () {
  const { id } = useParams()
  const [pacote, setPacote] = useState()
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  const fetchPacote = useCallback(async () => {
    try {
      const data = await getPacoteById(id)
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/packages/${id}?_embed=inscriptions`)
      // if (!response.ok) {
      //  throw new Error('Response not ok.')
      // } 
      // const data = await response.json()
      setPacote(data)
      setLoading(false)
    } catch (err) {
      const message = err.message === 'Response not ok.'
      ? '404'
      : 'Falha ao buscar informações do curso. Recarregue a página.'
      setErrorMsg(message)
      setLoading(false)
      }
    }, [id])
  
  useEffect(() => {
    fetchPacote()
  }, [fetchPacote])
  if (loading) {
    return <Loading />
  }
  if (errorMsg === '404') {
    return <NotFoundView />
  }
  return (
    <Layout>
      <ContainerStyled>
      {errorMsg ? (
        <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
      ) : (
        <>
        <h1 className="text-center mt-4">{pacote.name}</h1>
        <p><strong>Agente:</strong> {pacote.agente}</p>
        <p>{pacote.description}</p>
        <Inscriptions inscriptions={pacote.inscriptions} />
        <InscriptionForm pacoteId={id} onRegister={fetchPacote} />
        </>
      )}
      </ContainerStyled>
    </Layout>
  )
}


const ContainerStyled = styled(Container)`
  max-width: 900px;
`