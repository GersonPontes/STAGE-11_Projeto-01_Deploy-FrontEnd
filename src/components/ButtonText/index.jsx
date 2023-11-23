import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ButtonText({ title, isactive= "false", to, ...rest }) {
  return (
    <Container
      type="button"
      $isactive={isactive}
      {...rest}
    >
      <Link to={to}>
        {title}
      </Link>
      
    </Container>
  );
};