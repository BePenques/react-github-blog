import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 864px;
    margin: 0rem auto 0;
    padding: 0 1.5rem;
`;

export const BoxIssueInformations = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    height: 168px;
  
    background: ${props => props.theme["base-profile"]};
 
    border-radius: 10px;

    margin-top: -5rem;
    gap: 14px;

     h3{
        font-size: 24px;
        color:  ${props => props.theme["base-title"]};

     }
`
export const HeaderIssue = styled.div`
display: flex;
justify-content: space-between;
span{
    display: flex;
    color:  ${props => props.theme["blue"]};
    font-size: 12px;
    gap: 3.5px;
}
`

export const BoxContent = styled.div`

    padding: 40px 32px;
    font-size: 16px;
    line-height: 160%;
`

export const GithubUserInformations = styled.div`
    height: 148px;
    /* width: 600px; */
    padding-top: 5px;
    margin-right: 32px;

    h3{
        font-size: 24px;
         margin-bottom: 8px;
    }
    p{
        font-size: 16px;
        margin-bottom: 24px;
    }
`

export const GithubUserTags = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 24px;
  

   span{
    display: flex;
    flex-direction: row;
    
    gap: 4px;
  
   }
`

export const GithubLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
    float: right ;
    margin-right: 32px;
    p{
        font-size: 12px;
    }
    

`





