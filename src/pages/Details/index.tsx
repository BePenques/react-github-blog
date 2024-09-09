 
 
 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, GithubUserTags, BoxIssueInformations, HeaderIssue, BoxContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import Markdown from 'react-markdown'
import { useNavigate } from "react-router-dom";
import {  formatDistanceToNow, format  } from 'date-fns';
import {ptBR}  from 'date-fns/locale/pt-BR';
// import { format, toZonedTime } from 'date-fns-tz';

export function Details(){

    interface GithubIssueDetails{
        title: string;
        body: string;
        created_at: string;
        number: number;
        comments: number;
        html_url: string;
        user:{
            login: string;
        }
      }

    const { issueNumber } = useParams()
    const [GithubIssuesDetails, setGithubIssuesDetails] = useState<GithubIssueDetails>()
    const navigate = useNavigate()

    async function fetchIssueDetailsData(){
        const response = await api.get(`https://api.github.com/repos/bepenques/react-github-blog/issues/${issueNumber}`)
        setGithubIssuesDetails(response.data)
      }
  
    useEffect(()=>{       
         fetchIssueDetailsData();
      },[])

      const createdAt = GithubIssuesDetails?.created_at;
      let publishedDateFormated;
      let publishedDateRelativeNow;
      
      if (createdAt) {
         publishedDateFormated = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
            locale: ptBR,
          })
           publishedDateRelativeNow = formatDistanceToNow(createdAt,{
            locale: ptBR,
            addSuffix: true
          })
      }
   
   function redirectGithub(){
    window.open(
        `${GithubIssuesDetails?.html_url}`,
        '_blank' 
      );
   }
    
    return (
    <Container>
        <BoxIssueInformations>
            <HeaderIssue>
                <span>
                <a  onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} color="#3294F8" fontSize={12}/>
                        VOLTAR
                </a>
                </span>
                <span>
                <a  onClick={() => redirectGithub()}>
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize="12"/>
                </a>
                </span>
            </HeaderIssue>
            <h3>{GithubIssuesDetails?.title}</h3>
            <GithubUserTags>
                <span>
                    <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18}/>
                    <p>{GithubIssuesDetails?.user.login}</p>
                </span>
                <span>
                    <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" fontSize={18}/>
                    {createdAt && 
                    <time title={publishedDateFormated} dateTime={GithubIssuesDetails?.created_at.toString()}>
                        {publishedDateRelativeNow}
                    </time>
                    }
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} color="#3A536B" fontSize={18}/>
                    <p>{GithubIssuesDetails?.comments} comentários</p>
                </span>
            </GithubUserTags>
        </BoxIssueInformations>
        <BoxContent>
             <p><Markdown>{GithubIssuesDetails?.body}</Markdown></p>
        </BoxContent>
    </Container>
    )
}


