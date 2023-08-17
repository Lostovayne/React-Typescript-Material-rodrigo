import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: FC = () => {
    const [allcharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        characters
            .getAll({ page })
            .then((res) => {
                setCount(res.data.info.pages);
                setAllCharacters(res.data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

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
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div>
                        {allcharacters && (
                            <Grid container spacing={2} direction="row">
                                {allcharacters.map((character) => (
                                    <Grid item key={character.id} xs={3} sx={{ p: 4 }}>
                                        <CardComponent
                                            image={character.image}
                                            name={character.name}
                                            species={character.species}
                                            status={character.status}
                                            id={character.id}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </div>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 6 }}>
                        <Pagination
                            count={count}
                            page={page}
                            onChange={handleChange}
                            variant="outlined"
                            color="primary"
                            size="large"
                        />
                    </Box>
                </>
            )}
        </Container>
    );
};
