import React from 'react'
import { useQuery, gql } from "@apollo/client"

interface Props { }

const exchnageRates = gql`
query { viewer { login }}
`


const ExchangeRate: React.FC<Props> = () => {
    const { loading, error, data } = useQuery(exchnageRates)
    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>
        }
        if (error) {
            console.log(error)
            return <div>error</div>
        }
        return <div>{JSON.stringify(data)}</div>
  
    }
    return renderContent()
}

export default ExchangeRate