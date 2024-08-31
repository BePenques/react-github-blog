import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, BoxUserInformations, GithubImage, GithubUserInformations,GithubUserTags, GithubLink, SearchBox, SearchInput, IssuesList, Issue } from "./styles";
import {  faArrowUpRightFromSquare, faBuilding, faUserGroup  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home(){
    return (
    <Container>
        <BoxUserInformations>
            <GithubImage src={"/src/assets/avatar.png"} alt="" />
            <GithubUserInformations>
              <GithubLink>
                <p>GITHUB</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize="12"/>
              </GithubLink>        
              <h3>Cameron Williamson</h3>
              <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
                    dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
              <GithubUserTags>
                <span>
                  <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18}/>
                  <p>cameronwll</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faBuilding} color="#3A536B" fontSize={18}/>
                  <p>Rocketseat</p>
                </span>
                <span>
                  <FontAwesomeIcon icon={faUserGroup} color="#3A536B" fontSize={18}/>
                  <p>32 seguidores</p>
                </span>
              </GithubUserTags>
            </GithubUserInformations>
        </BoxUserInformations>
        <SearchBox>
          <div>
            <h3>Publicações</h3>
            <p>6 Publicações</p>
          </div>
          <SearchInput type="text" placeholder="Buscar conteúdo"/>
        </SearchBox>
        <IssuesList>
          <Issue>  
            <h3>JavaScript data types and data structures</h3>
            <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean  
            </p>     
          </Issue>
          <Issue>         
          </Issue>
          <Issue>         
          </Issue>
          <Issue>         
          </Issue>
        </IssuesList>
    </Container>
    )

    
}