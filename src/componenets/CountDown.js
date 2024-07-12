import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CountDown = ({ statingSeconds }) => {
    // const [second, setSecond] = useState(statingSeconds);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSecond((sec) => (sec > 0 ? sec - 1 : 0));
    //     }, 1000)

    //     return () => clearInterval(interval);
    // }, [])
    // return (
    //     <Container maxWidth="xl">
    //         <Typography variant='h5' color={"black"}>{second} seconds remaining</Typography>
    //     </Container>
    // )

    const [timeLeft, setTimeLeft] = useState(statingSeconds);

    useEffect(() => {
        // Calculate time left
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            console.log("Now: ", now);
            const distance = parseInt(statingSeconds) - now;
            console.log("Distance: ", distance);
            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [statingSeconds]);

    return (
        <Container maxWidth="xl" sx={{mt:'3%'}}>
            <Box>
                <Stack direction="row" spacing={6}>
                    <Typography variant='h5' sx={{pt: '1.5%'}}>
                        Sale ends in : 
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <Stack direction="column" spacing={1}>
                            <Typography variant='subtitle2'>
                                Days
                            </Typography>
                            <Typography variant='h4'>
                                {timeLeft.days} :
                            </Typography>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Typography variant='subtitle2'>
                                Hours
                            </Typography>
                            <Typography variant='h4'>
                                {timeLeft.hours} :
                            </Typography>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Typography variant='subtitle2'>
                                Minutes
                            </Typography>
                            <Typography variant='h4'>
                                {timeLeft.minutes} :
                            </Typography>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Typography variant='subtitle2'>
                                Seconds
                            </Typography>
                            <Typography variant='h4'>
                                {timeLeft.seconds}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    );
}

export default CountDown