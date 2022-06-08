import React, {useEffect, useRef} from "react";
import {Grid} from "@mui/material";

// import text_scan from '../assets/text_scan.json';

function Loading(){

    return (
        <Grid container>
            <div>
                <h2> Loading . . . </h2>
            </div>
        </Grid>
    );
}

export default Loading;