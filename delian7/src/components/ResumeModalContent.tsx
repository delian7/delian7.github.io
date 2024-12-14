import { Box, Button } from "@chakra-ui/react";

const ResumeModalContent = () => {
    return (
      <Box height="900px" display={'flex'} flexDirection={'column'}>
        <Box color={'green.400'} marginY={'8'} display={'flex'} justifyContent={'space-evenly'}>
          <Button colorScheme="blue" variant='solid'><a target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=1d3yi-kLma2BfpYYeid4M0WzsP-jo3h2J">Download in PDF</a></Button>
          <Button colorScheme="blue" variant='solid'><a target="_blank" rel="noreferrer" href="https://drive.google.com/uc?export=download&id=17SXDG-HRIgA8amhI0CbH0b8mhfz5ZcJP">Download in DOCX</a></Button>
        </Box>
        <iframe
          title='Delian Petrov Resume'
          src="https://drive.google.com/file/d/1d3yi-kLma2BfpYYeid4M0WzsP-jo3h2J/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          id="resume-iframe"
        />
      </Box>
    );
};

export default ResumeModalContent;