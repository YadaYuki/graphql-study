import React, { useState } from 'react'
// import { useQuery, gql } from "@apollo/client"
import { useLazyQuery, gql } from "@apollo/client"
import IdForm from "./id-form"

interface Props { }

const repositoryListQuery = (userId: string) => {
    const repositoryItemFramgment = gql`
        fragment RepositoryItem on Repository{
            name
            languages(first:5){
                nodes{
                    name
                }
            }
        }
    `
    const repositoryListFragment = gql`
        fragment RepositoryList on User{
            repositories(last:100,privacy:PUBLIC){
                nodes{
                    ...RepositoryItem
                 }
            }
        }
    `
    return gql`
        ${repositoryItemFramgment}
        ${repositoryListFragment}
        query {   
            user(login:"${userId}"){ 
                ...RepositoryList
            }
        }
    `
}




const RepositoryList: React.FC<Props> = () => {
    const [userId, setUserId] = useState("")
    const [
        getRepositories,
        { loading, data, error }
    ] = useLazyQuery(repositoryListQuery(userId))
    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>
        }
        if (error) {
            console.log(error)
            return <div></div>
        }
        return <div>{JSON.stringify(data)}</div>
    }
    return (
        <div>
            <IdForm handleClick={getRepositories} handleChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { setUserId(e.target.value) }} />
            {renderContent()}
        </div>
    )
}

export default RepositoryList