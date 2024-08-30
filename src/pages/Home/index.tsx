import { Container, BoxUserInformations, GithubImage, GithubUserInformations,GithubUserTags } from "./styles";
import { faGuitar  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Home(){
    return (
    <Container>
        <BoxUserInformations>
            <GithubImage src={"/src/assets/avatar.png"} alt="" />
            <GithubUserInformations>
                <h3>Cameron Williamson</h3>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam <br />
                     dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <GithubUserTags>
                  <span>
                    <FontAwesomeIcon icon={faGuitar} />
                    <p>cameronwll</p>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGuitar} />
                    <p>cameronwll</p>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faGuitar} />
                    <p>cameronwll</p>
                  </span>
                </GithubUserTags>
            </GithubUserInformations>
        </BoxUserInformations>
    </Container>
    )

    
}