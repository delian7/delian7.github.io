import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import {useAlertContext} from "../context/alertContext";
import { Box, Spinner } from '@chakra-ui/react';


const RedirectPage = () => {
  const { name } = useParams(); // Extract 'name' from the route
  const navigate = useNavigate(); // Navigate programmatically
  const { onOpen } = useAlertContext();


  // useEffect(() => {
  //   const fetchAndRedirect = async () => {
  //     try {
  //       // Replace with your Lambda API URL
  //       const response = await fetch(`https://qpqyy5wg42qcon34ph6mhljct40wtmpl.lambda-url.us-east-2.on.aws/?name=${name}`)
  //       if (response.ok) {
  //         const data = await response.json();

  //         if (data.url) {
  //           const title = name || 'Delian Petrov';
  //           document.title = title
  //           document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);

  //           window.location.href = data.url; // Perform the redirect

  //         } else {
  //           navigate('/'); // Redirect to a 404 page if the name is not found
  //           onOpen("error", "The short link was not found")
  //         }
  //       } else {
  //         navigate('/'); // Redirect to a 404 page if the name is not found
  //         onOpen("error", "The short link was not found")
  //       }
  //     } catch (error) {
  //       console.error('Error fetching URL:', error);
  //       navigate('/'); // Redirect to a generic error page
  //     }
  //   };

  //   fetchAndRedirect();
  // }, [name, navigate, onOpen]);


  useEffect(() => {
    window.location.href = `https://delianpetrov.com/api/og?name=${name}`;
  }, [name]);

  // return (
  //   <>
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       minHeight="100vh"
  //       background={'lavender'}
  //     >
  //       <Spinner size={'xl'}></Spinner>
  //     </Box>
  //   </>
  // )

  return null;
};

export default RedirectPage;