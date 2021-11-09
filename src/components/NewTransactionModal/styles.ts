import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.2rem;
    margin-bottom: 1.3rem;
  }
  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    background: #e7e9ee;

    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 0.9rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 0.7rem;
    }
  }
  button[type="submit"] {
      width: 100%;
      padding: 0 2rem;
      height:  3rem;
      background: var(--green);
      color: #fff;
      border-radius: .25rem;
      border: 0;
      font-size: 1rem;
      margin-top:1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
  }
`;
