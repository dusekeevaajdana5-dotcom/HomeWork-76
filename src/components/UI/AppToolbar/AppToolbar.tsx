import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
        color: "black",
    }
});

const AppToolbar = () => {

    return (
        <AppBar position="sticky" sx={{mb: 2 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <StyledLink to="/">Chat</ StyledLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;