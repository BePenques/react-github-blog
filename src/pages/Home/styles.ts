import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0rem auto 0;
    padding: 0 1.5rem;
`;

export const BoxUserInformations = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 212px;
     
    background: ${props => props.theme["base-profile"]};
 
    border-radius: 10px;

    margin-top: -5rem;
    gap: 2rem;
`

export const GithubUserInformations = styled.div`
    height: 148px;
    width: 630px;
    margin: auto 0;

    h3{
        font-size: 24px;
    }
    p{
        font-size: 16px;
        line-height: 160%;
        margin-bottom: 24px;
    }
`

export const GithubUserTags = styled.div`
   display: flex;
   flex-direction: row;
   gap: 24px;

   span{
    display: flex;
    flex-direction: row;
    gap: 4px;
    
   }
`

export const GithubImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 148px;
    height: 148px;
    border-radius: 8px;
`

