import { Heading, Text, Button, Box, HStack, Link } from "native-base";
import React from "react";
import CardComponent from "./cardComponent";
import { useNavigate } from "react-router-dom";
import DoneeForm from "./doneeForm";

export interface DoneeData {
    requestId: number;
    bloodGroup: string;
    city: string;
    area: string;
    phone: string;
    amount: number
}

const HomePage = () => {
    const navigate = useNavigate();
    const [showDoneeDetailCard, setIsDoneeDetailCard] = React.useState(false);
    const [showDoneeForm, setIsDoneeForm] = React.useState(false);

    function donateBlood() {
        setIsDoneeDetailCard(true)
        navigate('/donee')
    }

    function askForBlood() {
        setIsDoneeForm(true)
        navigate('/ask')
    }

    return (
        <>
           <Box alignItems="center">
                <HStack space={3} justifyContent="center">
                    <Button height="100px" width="200px" component={Link} to="/donee" onPress={() => donateBlood()}>Donate blood</Button>
                    {showDoneeDetailCard && (
                        <CardComponent />
                    )}
                    <Button height="100px" width="200px" onPress={() => askForBlood()}>Ask for blood</Button>
                    {showDoneeForm && (
                        <DoneeForm />
                    )}
                    <Button height="100px" width="200px" onPress={() => console.log("my history")}>My history</Button>
                </HStack>
           </Box>
        </>
    )
}

export default HomePage;
