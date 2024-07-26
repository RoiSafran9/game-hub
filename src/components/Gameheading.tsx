import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQeury: GameQuery;
}

const Gameheading = ({ gameQeury }: Props) => {
  const heading = `${gameQeury.platform?.name || ""} ${
    gameQeury.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default Gameheading;
