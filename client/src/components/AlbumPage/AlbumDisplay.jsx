import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Rating from '@mui/material/Rating';

function AlbumDisplay({props}) {
  const Img = styled('img')({
    marginLeft: 'auto',
    minWidth: '128px',
    maxBlockSize: '256px',
    display: 'block',
    textAlign: "right"
  });

  return (
    <div>
      {props && (
        <Paper elevation={0}
          sx={{
            p: 2,
            margin: '16px',
            flexGrow: 1,
          }}
          >
          <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center' paddingRight={4}>
            <Grid item xs={3} >
                <Img alt={props.name} src={props.images[0].url} />
            </Grid>
            <Grid item xs={3}>
                <Typography fontWeight={700} gutterBottom variant="subtitle2" component="span">
                  Album
                </Typography>
                <Typography fontWeight={800} variant="h5">
                  {props.name}
                </Typography>
                <Typography fontWeight={400} gutterBottom variant="subtitle2" component="span">
                  {props.artists[0].name} • {props.total_tracks} Tracks
                </Typography>
              </Grid>
                
            <Grid item xs={4}>
              <Box sx={{ border: '2px solid grey', p: '12px', minWidth: '200px', minHeight: '120px', marginBottom: '8px', maxWidth: '400px'}}>
                <Typography fontWeight={700} gutterBottom component={'legend'} >
                  User Score
                </Typography>
                <Rating name="read-only" value={4} readOnly /> <br />
                <Typography gutterBottom variant="caption">
                  Based on 100 ratings
                </Typography>
              </Box>
              <Box sx={{ border: '2px solid grey', p: '12px', minWidth: '200px', maxWidth: '400px' }}>
                <Typography fontWeight={700} gutterBottom variant="subtitle2" >
                  Details
                </Typography>
                <Divider />
                <Typography fontWeight={400} gutterBottom variant="subtitle2" mt={'16px'} >
                Release Date: {props.release_date} <br />
                Type: {props.album_type}<br />
                Genre: {props.genres}<br />
                Label: {props.label}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default AlbumDisplay;