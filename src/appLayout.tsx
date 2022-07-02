import { Center, Container, Heading, Text } from "native-base";
import React from "react";
import CardComponent from "./cardComponent";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./homePage";
import MenuDrawer from "./mainMenu";
import DoneeForm from "./doneeForm";

const AppLayout = () => {
    return (
        <>
        <Center>
            <Container>
              {/* App routing structure */}
              <MenuDrawer />
              <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/donee" element={<CardComponent/>} />
                <Route path="/ask" element={<DoneeForm />} />
              </Routes>
              </BrowserRouter>
            </Container>
        </Center>;
        </>
    )
}

export default AppLayout;
