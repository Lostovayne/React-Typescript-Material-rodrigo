import { Button, Container } from "@mui/material";
import { FC, useEffect } from "react";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: FC = () => {
    useEffect(() => {
        characters
            .getAll({ page: 1 })
            .then((res) => {
                console.log(res.data.results);
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
        </Container>
    );
};
