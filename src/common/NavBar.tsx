import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar: FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            spacing={2}
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Grid item>
                                <Typography variant="h6">Epsaind</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" onClick={() => navigate("login")}>
                                        Login
                                    </Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
