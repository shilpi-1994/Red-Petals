import { AspectRatio, Box, Text, Image, Stack, Heading, HStack } from 'native-base'
import React from "react"
import { DoneeProps } from './cardComponent';
import InfomationCard from './infomationCard';

interface Props {
    details?: DoneeProps[]
}

const DoneeDetails = (props : Props) => {
    const doneeDetail = props.details;
    return (
        <>
            <Box>
             <Stack space="2" p="4">
               <HStack space={3} justifyContent="center">
                <InfomationCard details={doneeDetail}/>
               </HStack>
             </Stack>
            </Box>  
        </>
    )
}

export default DoneeDetails;