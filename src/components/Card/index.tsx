import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { FC } from "react";

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
};

export const CardComponent: FC<CardProps> = ({ image, name, species, status }) => {
    return (
        <Card>
            <CardMedia component={"img"} height={"194"} image={image} alt="green iguana" />
            <CardContent>
                <Typography sx={{ my: 1 }} variant="h6">
                    {name}
                </Typography>
                <Divider />
                <Typography sx={{ mt: 1 }}>Especie: {species} </Typography>
                <Typography sx={{ mt: 1 }}>Estado: {status} </Typography>
            </CardContent>
            <CardActions sx={{ padding: 2 }}>
                <Button fullWidth variant="contained" size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
