import {Route, Routes} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import Messages from "./features/messages/Messages.tsx";
import NewMessages from "./features/messages/NewMessages.tsx";

const App = () => {
    console.log("app render")

    return (
        <>
            <header>
                <AppToolbar/>
            </header>
            <Container component="main" maxWidth="xl">
                <Routes>
                    <Route path="*" element={<Typography variant={"h4"}>Not found</Typography>}/>
                    <Route path="/" element={<Messages/>}/>
                    <Route path="/messages/new" element={<NewMessages/>}/>
                </Routes>
            </Container>
        </>
    )
}

export default App
