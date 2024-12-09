import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {useAlertContext} from "../context/alertContext";
import { useParams } from 'react-router-dom';


const RedirectPage = () => {
  const { search } = window.location; // Get the current URL's search string
  const params = new URLSearchParams(search); // Create a URLSearchParams object
  const redirectName = params.get('name'); // Extract the 'name' parameter
  const { name } = useParams(); // Extract 'name' from the route
  const navigate = useNavigate(); // Navigate programmatically
  const { onOpen } = useAlertContext();


  useEffect(() => {
    const fetchAndRedirect = async () => {
      const shortLink = name || redirectName
      try {
        const response = await fetch(`https://qpqyy5wg42qcon34ph6mhljct40wtmpl.lambda-url.us-east-2.on.aws/?name=${shortLink}`)
        if (response.ok) {
          const data = await response.json();
          window.location.href = data.url; // Perform the redirect
        } else {
          navigate('/'); // Redirect to a 404 page if the name is not found
          onOpen("error", "The short link was not found")
        }
      } catch (error) {
        console.error('Error fetching URL:', error);
        navigate('/'); // Redirect to a generic error page
      }
    };

    fetchAndRedirect();
  }, [name, navigate, onOpen, redirectName]);

  return (
    <>
      <p>Redirecting...</p>
    </>
  )
};

export default RedirectPage;