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
    font-size: 12px;

`
//--------search form
export const SearchBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 72px;
   gap: 12px;
   div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    h3{
        font-size: 18px;
    }
    p{
        font-size: 14px;
    }
   }
`
export const SearchInput = styled.input`
    height: 50px;
    border-radius: 6px;
    background: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    padding: 16px 12px;
    color:  ${props => props.theme["base-text"]};
    
    &::placeholder{
        color:  ${props => props.theme["base-label"]};
    }
`
//-----IssuesList
export const IssuesList = styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    height: auto;
    flex-wrap: wrap;
    gap: 2rem;
    
`
export const Issue = styled.div`
   /* width: 416px; */
   width: 390px;
   height: 260px;
   background: ${props => props.theme["base-post"]}; 
   border: 1px solid red;
   margin-top: 32px;
    
`


export const GithubImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-left: 40px;
    vertical-align: middle;
`




