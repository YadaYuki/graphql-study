import React, { useState } from 'react'
// import { useQuery, gql } from "@apollo/client"
import { useLazyQuery,useMutation ,gql } from "@apollo/client"
import IdForm from "./id-form"

interface Props { }

const repositoryListQuery = (userId: string) => {
    const repositoryItemFramgment = gql`
        fragment RepositoryItem on Repository{
            name
            id
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
        query getRepository {   
            user(login:"${userId}"){ 
                ...RepositoryList
            }
        }
    `
}

const addStarQuery = gql`
    mutation addStar($repositoryId: String!){
        addStar(input:{starrableId:$repositoryId}){
            clientMutationId
        }
    }
`



const RepositoryList: React.FC<Props> = () => {
    const [userId, setUserId] = useState("")
    const [
        getRepositories,
        { loading, data, error }
    ] = useLazyQuery(repositoryListQuery(userId))
    const [addStar] = useMutation(addStarQuery)
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
    const [repositoryId,setRepositoryId] = useState("")
    const onClick = () => {
        if(repositoryId.length === 0){
            return 
        }
        // set star!
        addStar({ variables: { repositoryId } });
    }
    return (
        <div> 
            <IdForm handleClick={getRepositories} handleChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { setUserId(e.target.value) }} />
            {renderContent()}
            <h1>Add Star</h1>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setRepositoryId(e.target.value)}} placeholder="set id here..." type="text" />
            <br />
            <button onClick={onClick}>Star!</button>
        </div>
    )
}

export default RepositoryList