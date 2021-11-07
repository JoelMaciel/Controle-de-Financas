import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 0.9rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0 0.25rem;
    height: 2.1rem;

    &:hover {
        transition: filter .2s;
      filter: brightness(0.9);
      
    }
  }
`;
