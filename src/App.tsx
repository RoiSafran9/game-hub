import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGamequery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" paddingX={5}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGamequery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={3}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGamequery({ ...gameQuery, platform })
            }
          />
          <Box marginLeft={5}>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGamequery({ ...gameQuery, sortOrder })
              }
            />
          </Box>
        </Flex>
        <GameGrid
          gameQuery={gameQuery}
          selectedPlatform={gameQuery.platform}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
