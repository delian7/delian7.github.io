import { Box, Button } from "@chakra-ui/react";

const ResumeModalContent = () => {
    const pdfID = "1xl2LsWDi7Soc18Jh-fdSg49eDg39NkPA"; // Define your PDF ID
    const docxID = "1bIkRhZl2OXN-WMPDaxurv8nsTZCfiI21"; // Define your DOCX ID

    return (
      <Box height="900px" display={'flex'} flexDirection={'column'}>
        <Box color={'green.400'} marginY={'8'} display={'flex'} justifyContent={'space-evenly'}>
          <Button colorScheme="blue" variant='solid'>
            <a target="_blank" rel="noreferrer" href={`https://drive.google.com/uc?export=download&id=${pdfID}`}>Download in PDF</a>
          </Button>
          <Button colorScheme="blue" variant='solid'>
            <a target="_blank" rel="noreferrer" href={`https://drive.google.com/uc?export=download&id=${docxID}`}>Download in DOCX</a>
          </Button>
        </Box>
        <iframe
          title='Delian Petrov Resume'
          src={`https://drive.google.com/file/d/${docxID}/preview`}
          width="100%"
          height="100%"
          allow="autoplay"
          id="resume-iframe"
        />
      </Box>
    );
};

export default ResumeModalContent;