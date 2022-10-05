import { useRouter } from "next/router"

export default function Teste(){
  const {query} = useRouter()

  return(
    <h1>teste page: {JSON.stringify(query)}</h1>
  )
}