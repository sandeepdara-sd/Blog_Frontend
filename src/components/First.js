import { Button, Card, CardActionArea, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const First = () => {
  return (
    <div>
      <style>
        {`
        .text {
            background-image: url("https://th.bing.com/th/id/OIP.1CR7YohPeB9wD3cPFRmu3ACxEs?w=192&h=324&c=7&r=0&o=5&dpr=1.3&pid=1.7");
            background-size: contain;
            background-clip: text;
            color: transparent;
            font-size: 70px;
            font-weight: bold;
        }
        `}
      </style>

      <Box textAlign="center" marginTop="10px">
        <Typography variant="h2" fontFamily="revert-layer" color="primary">
          <b className="text">WELCOME TO THE BLOGGING WORLD</b>
        </Typography>
      </Box>

      <Box marginTop="20px" padding={1}>
        <SwipeableTextMobileStepper />
      </Box>

      <Grid container justifyContent="center" marginTop="50px">
        <Grid item>
          <Button
            variant="contained"
            component="a"
            href="/signup"
            size="large"
            sx={{
              width: '300px',
              fontSize: '25px',
              border: '1px solid whitesmoke',
              borderRadius: 3,
              height: '80px',
              backgroundColor: '#00796b',
              marginTop: '50px',
              color: 'whitesmoke',
              ':hover': {
                color: '#004d40',
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            <b>GET STARTED</b>
          </Button>
        </Grid>
      </Grid>

      <Divider orientation="horizontal" sx={{ margin: '40px auto', width: '80%', color: '#e0f7fa' }} />

      <Box marginLeft="30px" marginTop="40px">
        <h2 color="#00796b">
          KNOW MORE
        </h2>
      </Box>

      <Box marginLeft="30px" color="gray">
        <Typography variant="body1">
          <b>
            <p>
              A content management tool (CMT) is a software application or system designed to facilitate the creation,
              editing, organization, and publication of digital content. It serves as a centralized platform for managing
              various types of content, including text, images, videos, and other multimedia elements. Content management
              tools are essential for individuals, businesses, and organizations looking to streamline the content
              creation and publishing process across digital platforms.
            </p>
            <p>
              Key features of content management tools typically include a user-friendly interface for content creation
              and editing, version control to track changes and revisions, and collaborative capabilities to enable multiple
              users to work on content simultaneously. These tools often provide content categorization, metadata tagging,
              and search functionalities, making it easier to organize and retrieve information efficiently.
            </p>
            <p>
              Content management tools play a crucial role in maintaining consistency and coherence across a website, blog,
              or any digital platform by allowing users to update and modify content without the need for extensive technical
              expertise. They also facilitate content scheduling and publishing, enabling users to plan and automate the release
              of content at specific times.
            </p>
            <p>
              In addition to managing content creation and publication, some advanced content management tools offer analytics
              and reporting features. These features help users assess the performance of their content, analyze user engagement,
              and make informed decisions to optimize their content strategy.
            </p>
            <p>
              Whether used by individual bloggers, marketing teams, or large enterprises, content management tools contribute
              significantly to enhancing productivity, ensuring content quality, and maintaining a seamless and organized digital
              presence.
            </p>
          </b>
        </Typography>
      </Box>

      <Grid container spacing={3} marginTop="50px" justifyContent="center">
        {[
          'https://img.freepik.com/premium-photo/business-concept-text-start-blog-white-board-with-paper-clips-wooden-table-background_406607-3944.jpg?size=626&ext=jpg&ga=GA1.1.1122057081.1697127890&semt=ais',
          'https://img.freepik.com/premium-photo/notebook-with-toolls-notes-about-blog-concept_132358-752.jpg?size=626&ext=jpg&ga=GA1.1.1122057081.1697127890&semt=ais',
          'https://img.freepik.com/premium-photo/view-desktop-with-coffee-laptop_325774-1964.jpg?size=626&ext=jpg&ga=GA1.1.1122057081.1697127890&semt=ais',
          'https://img.freepik.com/free-photo/business-branding-label-chart-graphic_53876-133806.jpg?size=626&ext=jpg&ga=GA1.1.1122057081.1697127890&semt=ais',
        ].map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 350, marginTop: `${index * 50 + 100}px`, boxShadow: 3 }}>
              <CardActionArea>
                <CardMedia component="img" height="300" image={image} alt={`image-${index}`} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default First;
