import React from "react"
import { Flex, Box, Text, Image, Link, Button } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex mt={32} flex={1} bg="#151515" color="white">
            <Box my={16} width="full">
                <Text fontSize="2xl"></Text>
                <Flex justify="center" my={6}>
                  <Link href="https://twitter.com/PepelonCeo" zIndex={1} target="_blank">
                    <Image src="/images/twitter.png" width="30px" height="30px" />
                  </Link>
                  <Link href="https://t.me/PepelonCeoOfficial" zIndex={1} target="_blank">
                    <Image ml={6} src="/images/tg.png" width="30px" height="30px" />
                  </Link>
                  <Link href="https://coinmarketcap.com/currencies/Pepelonceo/" zIndex={1} target="_blank">
                    <Image ml={6} src="/images/cmc.svg" width="30px" height="30px" />
                  </Link>
                </Flex>
                <Flex justify="center" my={2}>
                    <Text fontSize="md" as="i" color="gray.400"></Text>
                </Flex>
                <Text fontSize="md" as="i" color="gray.400"></Text>
            </Box>
        </Flex>
    );
}

export default Footer;