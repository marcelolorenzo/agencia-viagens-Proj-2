import { apiUrl } from "./Api.service"

export const getPacotes = async () => {
    const response = await fetch(`${apiUrl}/packages`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()
}

export const getPacoteById = async (pacoteId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/packages/${pacoteId}?_embed=inscriptions`)
    if (!response.ok) {
      throw new Error('Response not ok.')
    }
    return response.json()
}