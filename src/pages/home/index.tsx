import { Button, Container } from "@mui/material";
import { FC } from "react";

export const HomePage: FC = () => {
    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <Button variant="contained">Home</Button>
        </Container>
    );
};
