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
    margin-top: 48px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    height: auto;
    flex-wrap: wrap;
    gap: 1rem;
    
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




