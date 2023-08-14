import { Box, Button, Container, Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: FC = () => {
    const [allcharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null);

    useEffect(() => {
        characters
            .getAll({ page: 1 })
            .then((res) => {
                setAllCharacters(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container maxWidth="xl">
            <HeaderComponent
                title="Epsaind"
                description="Bienvenido"
                element={
                    <Button fullWidth variant="contained">
                        Login
                    </Button>
                }
            />
            <div>
                {allcharacters && (
                    <Grid container spacing={2} direction="row" sx={{ p: 6 }}>
                        {allcharacters.map((character) => (
                            <Grid item key={character.id} xs={3} sx={{ p: 4 }}>
                                <CardComponent
                                    image={character.image}
                                    name={character.name}
                                    species={character.species}
                                    status={character.status}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </div>
        </Container>
    );
};
