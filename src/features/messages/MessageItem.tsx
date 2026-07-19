import {Card, CardContent, Stack, Typography} from "@mui/material";

interface Props {
    author: string;
    message: string;
    datetime: string;
    id: string;
}

const MessageItem = ({author, message, datetime, id}: Props) => {
    return (
        <Stack  spacing={{xs: 12, md: 6, lg: 4}}>
            <Card>
                <CardContent component="strong">{author}</CardContent>
                <Typography  component="div">{message}</Typography>
                <Typography  component="span">{datetime}</Typography>
                <Typography  component="span">{id}</Typography>
            </Card>
        </Stack>
    );
};

export default MessageItem;