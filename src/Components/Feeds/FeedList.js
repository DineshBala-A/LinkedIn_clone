// // FeedList.js

// import React, { useState, useEffect } from 'react';
// import FeedCard from './FeedCard1' // Make sure to provide the correct path to your FeedCard component
// import { Container, Grid } from '@mui/material';

// const FeedList = () => {
//   const [feedData, setFeedData] = useState([]);

//   useEffect(() => {
//     fetchFeedData();
//   }, []);

//   const fetchFeedData = async () => {
//     try {
//       const response = await fetch('https://example.com/api/feed'); // Replace 'https://example.com/api/feed' with your actual API endpoint
//       if (response.ok) {
//         const data = await response.json();
//         setFeedData(data);
//       } else {
//         console.error('Failed to fetch feed data');
//       }
//     } catch (error) {
//       console.error('Error fetching feed data:', error);
//     }
//   };

//   return (
//     <Container>
//       <Grid container spacing={3}>
//         {feedData.map(feed => (
//           <Grid item xs={12} md={6} lg={4} key={feed.id}>
//             <FeedCard
//               id={feed.id}
//               username={feed.username}
//               subTitle={feed.subTitle}
//               date={feed.date}
//               imageUrl={feed.imageUrl}
//               description={feed.description}
//               tag={feed.tag}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default FeedList;
