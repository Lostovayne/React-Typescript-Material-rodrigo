import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
    username: string;
    password: string;
};

export const LoginPage: FC = () => {
    const { getError, getSuccess } = useNotification();

    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: "",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData)
            .then(() => {
                getSuccess(JSON.stringify(loginData));
            })
            .catch((error) => {
                getError(error.message);
            });
    };

    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ p: "1.2em", borderRadius: "0.5em" }}>
                        <Typography variant="h5" sx={{ mt: 1, mb: 1 }}>
                            {" "}
                            EpDev
                        </Typography>
                        <Box component={"form"} onSubmit={handleSubmit}>
                            <TextField
                                name="username"
                                type="text"
                                fullWidth
                                label="Email"
                                sx={{ mb: 1, mt: 2 }}
                                margin="normal"
                                onChange={dataLogin}
                            />
                            <TextField
                                name="password"
                                type="password"
                                fullWidth
                                label="Password"
                                sx={{ my: 1 }}
                                margin="normal"
                                onChange={dataLogin}
                            />

                            <Button variant="contained" type="submit" fullWidth sx={{ py: 1, mb: 1.5, mt: 1.5 }}>
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
