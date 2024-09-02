
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, GithubUserTags, BoxIssueInformations, HeaderIssue, BoxContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

export function Details(){
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
            <h3>JavaScript data types and data structures</h3>
            <GithubUserTags>
                <span>
                    <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18}/>
                    <p>cameronwll</p>
                </span>
                <span>
                    <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" fontSize={18}/>
                    <p>Há 1 dia</p>
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