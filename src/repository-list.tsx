import React,{useState} from 'react'
import { useQuery, gql } from "@apollo/client"
import IdForm from "./id-form"

interface Props { }

const repositoryListQuery = (userId:string)=>{
    return gql`
        query {   
            user(login:"${userId}"){ 
                repositories(last:100){
                    edges{
                        node{
                            name
                            }
                        }
                        totalCount
                    }
                }
            }
        `
    }


const RepositoryList: React.FC<Props> = () => {
    const [userId,setUserId] = useState("")
    const { loading, error, data,} = useQuery(repositoryListQuery(userId))
    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>
        }
        if (error) {
            return <div></div>
        }
        return <div>{JSON.stringify(data)}</div>
    }
    return (
        <div>
            <IdForm handleChange={(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {setUserId(e.target.value)}}/>
            {renderContent()}
        </div>
    )
}

export default RepositoryList