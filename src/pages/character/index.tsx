import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

export const CharacterPage: FC = () => {
    const { id } = useParams();

    const [loading, setLoading] = React.useState<boolean>(true);
    const [character, setCharacter] = React.useState<ICharacter | null>(null);

    React.useEffect(() => {
        characters
            .getById({ id })
            .then((res) => {
                setCharacter(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <Box sx={{ width: "100%", height: "350px" }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={5}>
                        {loading ? (
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Grid
                                container
                                direction={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{ height: "100%", mt: 4 }}
                                columnSpacing={2}
                            >
                                <Grid item xs={6}>
                                    <img
                                        src={character!.image}
                                        alt="personaje img"
                                        style={{ width: "100%", borderRadius: "0.5em" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h2">{character?.name}</Typography>
                                    <Divider />
                                    <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                                        <Typography variant="h6">{character?.species}</Typography>
                                        <Chip
                                            color={character?.status === "Alive" ? "success" : "error"}
                                            variant="outlined"
                                            label={character!.status}
                                        />
                                    </Box>
                                    <Typography variant="h6">{character?.type}</Typography>
                                    <Typography variant="h6">{character?.gender}</Typography>
                                    <Typography variant="h6">{character?.origin.name}</Typography>
                                    <Typography variant="h6">{character?.location.name}</Typography>
                                    <Typography variant="h6"> Episodios: {character?.episode.length}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
