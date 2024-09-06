import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubUserInformationsStyle,GithubUserTags, GithubLink, GithubImage} from "./styles";
import {  faArrowUpRightFromSquare, faBuilding, faUserGroup  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";



export function GithubUserInformations(){

    interface GithubUserInfos{
        login: string;
        avatar_url: string;
        name: string;
        followers: number;
        bio: string;
        company: string;
        html_url: string
      }
    
      const [GithubUserInfos, setGithubUserInfos] = useState<GithubUserInfos>()
    
        async function fetchUserData(){
          const response = await api.get('/users/BePenques')
          // console.log(response)
          setGithubUserInfos(response.data)
        }
    
        useEffect(()=>{       
          fetchUserData();
          
        },[])

        function redirectGithub(){
            window.open(
                `${GithubUserInfos?.html_url}`,
                '_blank'
              );
           }

    return(
        <>
            <GithubImage src={GithubUserInfos?.avatar_url} alt="" />
            <GithubUserInformationsStyle>
                {/* <a  onClick={() => redirectGithub()}> */}
                <GithubLink onClick={() => redirectGithub()}>           
                    <p>GITHUB</p>
                    
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize="12"/> 
                </GithubLink>      
                {/* </a>   */}
                <h3>{GithubUserInfos?.name}</h3>
                <p>{GithubUserInfos?.bio}</p>
                <GithubUserTags>
                    <span>
                    <FontAwesomeIcon icon={faGithub} color="#3A536B" fontSize={18}/>
                    <p>{GithubUserInfos?.login}</p>
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faBuilding} color="#3A536B" fontSize={18}/>
                    <p>{GithubUserInfos?.company}</p>
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faUserGroup} color="#3A536B" fontSize={18}/>
                    <p>{GithubUserInfos?.followers} seguidores</p>
                    </span>
                </GithubUserTags>
            </GithubUserInformationsStyle>
        </>
    )
}