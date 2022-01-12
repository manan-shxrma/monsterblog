import * as React from 'react';
import Card from "./homecard"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import "../css/blog.css"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import carddata from "./bloghomecarddata"
import {Row, Col} from "react-bootstrap"


 function emojiItem(term){
        return( <Row lg={4}>
                <Col>
                <Card 
                        key={term.id}
                        emote={term.emoji}
                        name={term.name}
                        desc={term.meaning}
                        img={term.image} />
                </Col></Row>

 )

}


const theme = createTheme();

export default function Album(props) {
  return (<> <section style={{fontFamily: "'Raleway', sans-serif !important",
                               paddingTop:"2%",overflow:"hidden",
                               display:"flex", flexDirection:"row",justifyContent:"center"}}>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
     <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#2a2728',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="aliceblue"
              gutterBottom
            >
              Voice matters
            </Typography>
            <Typography style={{fontFamily: "'Raleway', sans-serif"}} variant="h5" align="center" color="aliceblue" paragraph>
              MonsterBlog is a series of Blogs that contain real life experiences, 
              some worldy affairs, plumeting plots and some valueable life lessons.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        
      </main>
    </ThemeProvider>
  </section>

   

  <section className='homeblogmob' style={{justifyContent:"center",display:"flex",flexWrap:"wrap"}}>

  
  
       {carddata.map(emojiItem)}
     
 
</section>
 </> );
}