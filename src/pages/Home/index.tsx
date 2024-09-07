 
import { Container, BoxUserInformations,IssuesList, SearchBoxStyle, SearchInput } from "./styles";
import { GithubUserInformations } from "./components/GithubUserInformations";
import { Issue } from "./components/Issue";
import { useEffect, useState} from "react";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type searchFormInputs = z.infer<typeof searchFormSchema>;

export function Home(){

  const navigate = useNavigate()

  const { register, handleSubmit} = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  interface GithubIssues{
    total_count: number;
    issues: GithubIssueitem[]
  }

  interface GithubIssueitem{
    title: string;
    body: string;
    created_at: string;
    number: number;
  }

  const [GithubIssuesList, setGithubIssuesList] = useState<GithubIssues>()
  const [SearchString, setSearchString] = useState<string>('')
  const [totalCount, setTotalCount] = useState<number>(0)

    function redirectDetails(issueNumber: number){
      navigate(`/details/${issueNumber}`)
    }

    async function fetchUserData(){
      
      const response = await api.get(`https://api.github.com/search/issues?q=${SearchString}%20repo:BePenques/react-github-blog`)
     
      if(SearchString.length == 0){
        setTotalCount(response.data.total_count)
      }
      setGithubIssuesList({total_count: (totalCount ? totalCount : response.data.total_count), issues: response.data.items})
     
    }

    useEffect(()=>{       
      fetchUserData();
      
    },[SearchString])

    function handleSearchStringSubmit(data: searchFormInputs){
    
      setSearchString(data.query)
     
    }
  
    return (
    <Container>
        <BoxUserInformations>         
            <GithubUserInformations/>
        </BoxUserInformations>
        <SearchBoxStyle>
          <div>
            <h3>Publicações</h3>
            <p>{GithubIssuesList?.total_count} Publicações</p>
          </div>
          <form onSubmit={handleSubmit(handleSearchStringSubmit)}>
            <SearchInput 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register('query')}
            />
          </form>
        </SearchBoxStyle> 
        <IssuesList>
          {GithubIssuesList?.issues.map(issue => {
            return (
              <a  onClick={() => redirectDetails(issue.number)}>
                <Issue key={issue.title} title={issue.title} description={issue.body} created_at={issue.created_at} />
              </a>
            )
          })}
        </IssuesList>
    </Container>
    )

    
}