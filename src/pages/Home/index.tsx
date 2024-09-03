import { Container, BoxUserInformations, SearchBox, SearchInput, IssuesList } from "./styles";
import { GithubUserInformations } from "./components/GithubUserInformations";
import { Issue } from "./components/Issue";

export function Home(){
  
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
          <Issue/>
          <Issue/>
        </IssuesList>
    </Container>
    )

    
}