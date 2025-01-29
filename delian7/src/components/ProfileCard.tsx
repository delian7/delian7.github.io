import {
  Box,
  VStack,
  Avatar,
  Text,
  HStack,
  Button,
  Link,
  Icon,
  Stat,
  StatNumber,
  StatLabel,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaCodepen, FaMapMarkerAlt } from 'react-icons/fa';
import delianAvatar from "../images/avatar.jpg";

const ProfileCard = () => {
  const stats = [
    { label: 'Projects', value: '85+' },
    { label: 'Experience', value: '10y+' },
    { label: 'Countries', value: '3' },
    { label: 'Languages', value: '4' },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/delianpetrov',
      label: 'LinkedIn',
      gradient: 'linear-gradient(45deg, #1da1f2,#0e71c8)',
      shadow: '0px 4px 30px rgba(19, 127, 212, 0.7)'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/delian',
      label: 'GitHub',
      gradient: 'linear-gradient(45deg, #333333, #626b73)',
      shadow: '0px 4px 30px rgba(63, 65, 67, 0.6)'
    },
    {
      icon: FaCodepen,
      href: 'https://codepen.io/delian',
      label: 'CodePen',
      gradient: 'linear-gradient(45deg, #324e63, #414447)',
      shadow: '0px 4px 30px rgba(55, 75, 90, 0.6)'
    },
  ];

  return (
    <Flex
      w="100%"
      minH="100vh"
      align="center"
      justify="center"
      p={4}
    >
      <Box
        w="100%"
        maxW="700px"
        bg="white"
        borderRadius="12px"
        boxShadow="0px 8px 60px -10px rgba(13,28,39,0.6)"
        position="relative"
        pb={10}
      >
        <VStack spacing={0}>
          <Box
            w="150px"
            h="150px"
            transform="translateY(-50%)"
            borderRadius="full"
            overflow="hidden"
            position="relative"
            zIndex={4}
            boxShadow="0px 5px 50px 0px rgb(108, 68, 252), 0px 0px 0px 7px rgba(107, 74, 255, 0.5)"
          >
            <Avatar
              src={delianAvatar}
              name="Delian Petrov"
              w="100%"
              h="100%"
            />
          </Box>

          <VStack mt="-35px" px={5} spacing={4}>
            <Text
              fontSize="24px"
              fontWeight="700"
              color="#6944ff"
            >
              Delian Petrov
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#324e63"
            >
              Senior Full Stack Developer
            </Text>
            <Text
              fontSize="17px"
              fontWeight="500"
              color="#324e63"
            >
              Specializing in Ruby on Rails & React
            </Text>
            <HStack
              fontSize="18px"
              fontWeight="600"
              color="#324e63"
            >
              <Icon as={FaMapMarkerAlt} fontSize="27px" mr={2} />
              <Text>San Diego, California</Text>
            </HStack>

            <SimpleGrid columns={4} spacing={4} w="full" mt={8}>
              {stats.map((stat) => (
                <Stat key={stat.label} textAlign="center" px={10}>
                  <StatNumber
                    fontSize="27px"
                    fontWeight="700"
                    color="#324e63"
                  >
                    {stat.value}
                  </StatNumber>
                  <StatLabel
                    fontSize="16px"
                    fontWeight="500"
                    mt={2}
                  >
                    {stat.label}
                  </StatLabel>
                </Stat>
              ))}
            </SimpleGrid>

            <HStack spacing={8} mt={6}>
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  isExternal
                  w="55px"
                  h="55px"
                  borderRadius="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  bgGradient={social.gradient}
                  boxShadow={social.shadow}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                >
                  <Icon as={social.icon} fontSize="21px" />
                </Link>
              ))}
            </HStack>

            <HStack spacing={8} mt={8} w="full" justifyContent="center">
              <Button
                as="a"
                href="#contact-me"
                px={10}
                py={7}
                minW="201px"
                borderRadius="50px"
                fontSize="19px"
                fontWeight="700"
                color="white"
                bgGradient="linear-gradient(45deg, #1da1f2, #0e71c8)"
                boxShadow="0px 4px 30px rgba(19, 127, 212, 0.4)"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 7px 30px rgba(19, 127, 212, 0.75)',
                }}
                transition="all 0.3s"
              >
                Contact Me
              </Button>
              <Button
                px={10}
                py={7}
                minW="201px"
                borderRadius="50px"
                fontSize="19px"
                fontWeight="700"
                color="white"
                bgGradient="linear-gradient(45deg, #d5135a, #f05924)"
                boxShadow="0px 4px 30px rgba(223, 45, 70, 0.35)"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 7px 30px rgba(223, 45, 70, 0.75)',
                }}
                transition="all 0.3s"
              >
                Download Resume
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProfileCard;