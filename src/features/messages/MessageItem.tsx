import {Card, CardContent, Grid, Typography} from "@mui/material";

interface Props {
    author: string;
    message: string;
    datetime: string;
    id: string;
}

const MessageItem = ({author, message, datetime, id}: Props) => {
    return (
        <Grid size={{xs: 12, sm: 6, lg: 4}} >
            <Card sx={{ p: 2 }}>
                <CardContent component="strong">{author}</CardContent>
                <Typography  component="div">{message}</Typography>
                <Typography  component="span">{datetime}</Typography>
                <Typography  component="span">{id}</Typography>
            </Card>
        </Grid>
    );
};

export default MessageItem;