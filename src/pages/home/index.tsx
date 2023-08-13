import { Button, Container } from "@mui/material";
import { FC } from "react";
import { HeaderComponent } from "../../components";

export const HomePage: FC = () => {
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
