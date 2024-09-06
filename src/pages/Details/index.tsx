/* eslint-disable @typescript-eslint/no-unused-vars */
 
 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, GithubUserTags, BoxIssueInformations, HeaderIssue, BoxContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import {  formatDistanceToNow  } from 'date-fns';
import {ptBR}  from 'date-fns/locale/pt-BR';
import { format, toZonedTime } from 'date-fns-tz';

export function Details(){

    interface GithubIssueDetails{
        title: string;
        body: string;
        created_at: string;
        number: number;
        user:{
            login: string;
        }
      }

    const { issueNumber } = useParams()
    const [GithubIssuesDetails, setGithubIssuesDetails] = useState<GithubIssueDetails>()

    async function fetchIssueDetailsData(){
        const response = await api.get(`https://api.github.com/repos/bepenques/react-github-blog/issues/${issueNumber}`)
        setGithubIssuesDetails(response.data)
      }
  
    useEffect(()=>{       
         fetchIssueDetailsData();        
      },[])

      const createdAt = GithubIssuesDetails?.created_at;
    //   if (createdAt) {
          const zonedDate = toZonedTime(new Date(createdAt || ''), 'America/Sao_Paulo'); // exemplo para fuso horário de SP
          const publishedDateFormated = format(zonedDate, "d 'de' LLLL 'às' HH:mm'h'", {
              locale: ptBR,
          });
    //   }

    // const publishedDateFormated = format(GithubIssuesDetails?.created_at || '', "d 'de' LLLL 'às' HH:mm'h'", {
    //     locale: ptBR,
    // });
    const publishedDateRelativeNow = formatDistanceToNow(zonedDate || '',{
        locale: ptBR,
        addSuffix: true
    })
    
    return (
    <Container>
        <BoxIssueInformations>
            <HeaderIssue>
                <span>
                <FontAwesomeIcon icon={faChevronLeft} color="#3294F8" fontSize={12}/>
                    VOLTAR
                </span>
                <span>VER NO GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize="12"/>
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
                    <time title={publishedDateFormated} dateTime={GithubIssuesDetails?.created_at.toString()}>
                        {publishedDateRelativeNow}
                    </time>
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} color="#3A536B" fontSize={18}/>
                    <p>5 comentários</p>
                </span>
            </GithubUserTags>
        </BoxIssueInformations>
        <BoxContent>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>
        </BoxContent>
    </Container>
    )
}

function utcToZonedTime(arg0: Date, arg1: string) {
    throw new Error("Function not implemented.");
}
