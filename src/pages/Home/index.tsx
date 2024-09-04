import { Container, BoxUserInformations, SearchBox, SearchInput, IssuesList } from "./styles";
import { GithubUserInformations } from "./components/GithubUserInformations";
import { Issue } from "./components/Issue";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function Home(){

  interface GithubIssue{
    title: string;
    body: string;
    created_at: string;
  }

  const [GithubIssuesList, setGithubIssuesList] = useState<GithubIssue[]>([])

    async function fetchUserData(){
      const response = await api.get(`https://api.github.com/search/issues?q=repo:BePenques/react-github-blog`)
      console.log(response)
      setGithubIssuesList(response.data.items)
    }

    useEffect(()=>{       
      fetchUserData();
      
    },[])
  
    return (
    <Container>
        <BoxUserInformations>         
            <GithubUserInformations/>
        </BoxUserInformations>
        <SearchBox>
          <div>
            <h3>Publicações</h3>
            <p>6 Publicações</p>
          </div>
          <SearchInput type="text" placeholder="Buscar conteúdo"/>
        </SearchBox>
        <IssuesList>
          {/* <p>{GithubIssuesList[0].title}</p> */}
          {GithubIssuesList.map(issue => {
            return (
              <Issue key={issue.title} title={issue.title} description={issue.body} created_at={issue.created_at}/>
              // <Post
              //   key={post.id}
              //   post={post}
              // />
            )
          })}
          {/* <Issue/> */}
          {/* <Issue/> */}
        </IssuesList>
    </Container>
    )

    
}