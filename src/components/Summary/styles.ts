import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8.5rem;

  div {
    background: var(--shape);
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);
 
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight:500;
        line-height: 1.8rem;
  
    }
    &.highlight-backgroud{
        background-color: var(--green);
        color: #fff;
    }
  }
`;
