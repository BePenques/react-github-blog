import styled from 'styled-components';


export const GithubUserInformationsStyle = styled.div`
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

export const GithubImage = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-left: 40px;
    vertical-align: middle;
`




