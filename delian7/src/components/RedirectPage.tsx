import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {useAlertContext} from "../context/alertContext";


const RedirectPage = () => {
  const { search } = window.location; // Get the current URL's search string
  const params = new URLSearchParams(search); // Create a URLSearchParams object
  const name = params.get('name'); // Extract the 'name' parameter
  // const { name } = useParams(); // Extract 'name' from the route
  const navigate = useNavigate(); // Navigate programmatically
  const { onOpen } = useAlertContext();


  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        // Replace with your Lambda API URL
        alert(name);
        const response = await fetch(`https://qpqyy5wg42qcon34ph6mhljct40wtmpl.lambda-url.us-east-2.on.aws/?name=${name}`)
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
  }, [name, navigate, onOpen]);

  return (
    <>
      <p>Redirecting...</p>
    </>
  )
};

export default RedirectPage;