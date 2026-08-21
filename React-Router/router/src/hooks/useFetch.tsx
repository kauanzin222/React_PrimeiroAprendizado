import { useEffect, useState } from "react"

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null)

    const [config, setConfig] = useState<RequestInit>()
    const [method, setMethod] = useState<string | null>(null)
    const [callFetch, setCallFetch] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const [error, setError] = useState<string | null>(null)

    const [idDelete, setIdDelete] = useState<number | null>(null)

    // fazendo a configuração "automaticamente" -> chamado pelos components
    const httpConfig = (data: unknown, method: string) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } else if (method == 'DELETE') {
            setConfig({
                method
            })
        }

        setMethod(method)
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6- Loading
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Houve algum erro ao carregar dados'
                setError(message)
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // 5- refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                await fetch(url, config)
                setCallFetch((prev) => !prev)
            }
        }
        httpRequest()
    }, [config, method, url])


    // delete
    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'DELETE') {

                const urlProduct = url + idDelete

                const res = await fetch(urlProduct, config)

                const json = await res.json()

                setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url, idDelete])

    return { data, httpConfig, loading, error }
}
