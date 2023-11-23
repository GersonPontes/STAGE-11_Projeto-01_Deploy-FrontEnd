import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    button {
      border: none;
      background: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;

  margin: -9.3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 18.6rem;
  height: 18.6rem;

  margin: 0 auto 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: .7rem;
    bottom: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;