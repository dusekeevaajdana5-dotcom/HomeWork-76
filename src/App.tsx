import {Route, Routes} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar.tsx";
import Messages from "./features/messages/Messages.tsx";

const  App = () => {


  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <Container component="main" maxWidth="xl">
          <Routes>
            <Route path = "*" element ={<Typography variant={"h4"}>Not found</Typography>}/>
            <Route path = "/" element ={<Messages/>}/>
          </Routes>
      </Container>
    </>
  )
}

export default App
