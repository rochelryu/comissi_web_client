import { useState } from "react";
import { Box, Grid, Typography  } from '@mui/material';
const MarqueeInformation = () => {
  const onClick = (e) => {
    e.preventDefault();
  };
  // mobile menu
  const [infoMarquee, setInfoMarquee] = useState(false);
  if(!infoMarquee) {
    return (
      <Box
      component='div'
      sx={{
        position: 'fixed',
        width: '100%',
        height: 60,
        bottom: 0,
        backgroundColor: '#131111',
        paddingLeft: 6,

      }}
      >
        <Grid container>
          <Grid item xs={2} sx={{display: 'flex', backgroundColor: '#a14444', alignItems: 'center', justifyContent: 'center',}} >
            <Typography variant="h6" sx={{color: 'white'}}>BREAKING NEWS</Typography>       
          </Grid>
          <Grid item xs={10} className="marquee" >
            <Typography variant="span" sx={{color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>       
          </Grid>
        </Grid>
        <Box
          component='div'
          sx={{
            position: 'fixed',
            width: 60,
            height: 60,
            bottom: 0,
            right: 0,
            backgroundColor: '#131111',
            paddingLeft: 6,

          }}
          >
        </Box>
      </Box>
    )
  }
};
export default MarqueeInformation;
