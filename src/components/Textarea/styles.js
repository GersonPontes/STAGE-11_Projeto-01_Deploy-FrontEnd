import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;

  padding: 1.2rem 2.4rem;
  margin-bottom: .8rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;