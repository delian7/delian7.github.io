import { Heading, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <Box shadow="md" borderRadius="lg" backgroundColor={"white"}>
      <Image src={imageSrc} borderRadius="lg"/>

      <VStack p={4} spacing={4} alignItems={'baseline'} textColor={'black'}>
        <Heading size="md">{title}</Heading>
        <Text textColor="grey">{description}</Text>
        <a href="#">See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </VStack>
    </Box>
  )
};

export default Card;
