import styled from 'styled-components';

export const IssueStyle = styled.div`
   max-width: 400px;
   /* width: 390px; */
   height: 260px;
   background: ${props => props.theme["base-post"]}; 
   /* border: 1px solid red; */
   /* margin-top: 1rem; */
   border-radius: 10px;
   padding: 2rem;
   gap: 20px;
   display: flex;
   flex-direction: column;

   div{
    display: flex;
    flex-direction: row;
       h3{
        width: 84%;
        font-size: 20px;
        line-height: 160%;
        font:  ${props => props.theme["base-title"]}; 
    }
    span{
        font-size: 14px;
    }
   }
   
   p{
    font-size: 16px;
    line-height: 160%;
    font:  ${props => props.theme["base-text"]};

   }

    
`