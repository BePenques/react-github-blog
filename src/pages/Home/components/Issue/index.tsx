import { IssueStyle } from "./styles";
import Markdown from 'react-markdown'
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

interface GithubIssue{
  title: string;
  description: string;
  created_at: string;
}

export function Issue({ title, description, created_at }:GithubIssue){

  const publishedDateFormated = format(created_at, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const publishedDateRelativeNow = formatDistanceToNow(created_at,{
    locale: ptBR,
    addSuffix: true
  })

    return(
        <IssueStyle>  
            <div>
              <h3>{title}</h3>
              {/* <span>Há 1 dia </span> */}
              <time title={publishedDateFormated} dateTime={created_at}>
                   {publishedDateRelativeNow}
              </time>
            </div>
            <p><Markdown>{description}</Markdown></p>
          </IssueStyle>
    )
}