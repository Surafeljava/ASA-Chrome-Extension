import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import {Grid, Typography, TextField, CssBaseline, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Loading from './components/loading';

import bgimg from './assets/wave.svg';

const theme = createTheme({
  palette: {
    primary: {
        main: '#1c1c1c',
        contrastText: '#fcd1ac',
    },
    secondary: {
        main: '#fcd1ac',
        contrastText: '#1c1c1c',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});


function Popup(){

    const [loading, setLoading] = useState(true);

    //Use effect with timeout
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <Grid container direction='column' width='500px' height='500px' justifyContent='center' alignItems='center'>
                <Loading />
            </Grid>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <Grid container direction='column' width='500px' height='500px' padding={3}
                style={{ backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom'}}>
                    <Grid item>
                        <Typography variant='h4' >
                            Amharic Hate-Speech Detection
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' fontWeight={300}>
                            Description Here
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item>
                        <Typography variant='h6' fontWeight={300}>
                            Text
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth placeholder='Your Text Here'/>
                    </Grid>
                    <br />
                    <Button variant='contained' color='secondary' style={{ boxShadow: 'none', borderRadius: '10px' }}>
                        <Typography variant='h5' letterSpacing={2} fontWeight={400}>
                            CHECK
                        </Typography>
                    </Button>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

render(<Popup/>, document.getElementById('react-target'));