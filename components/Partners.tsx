import React from "react"
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

const Partners = () => {
    return (
        <Flex mt={0} flexDirection="column" color="white" px={{ base: 0, md: 0 }} mx={{ base: 0, md: 0 }} justify="ceenter" align="center">
            <Flex flex={1} flexDirection="column" justify="center" align="center">
                <Heading size="2xl"></Heading>
            </Flex>
            <Flex align="center" justify="center" width="0%" mt={0}>
                <Flex align="center" justify="center" flexDirection={{ base: 'column', md: 'row' }}>
                    <Image src="/images/metaplay.svg" width={{ base: 0, md: 0 }} />
                    {/* <Image ml={{ base: 0, md: 20 }} mt={{ base: 10, md: 0}} src="/images/finexbox.png" width={{ base: 218, md: 226 }} height={{ base: 54, md: 62}}/> */}
                    <Image ml={{ base: 0, md: 0 }} mt={{ base: 0, md: 0}} src="/images/harmonypad.svg" width={{ base: 0, md: 0 }} />
                    <Image ml={{ base: 0, md: 0 }} mt={{ base: 0, md: 0}} src="/images/polygon-logo.png" width={{ base: 0, md: 0 }} />
                    <Image ml={{ base: 0, md: 0 }} mt={{ base: 0, md: 0}} src="/images/polygon-studios-logo.png" width={{ base: 0, md: 0 }} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Partners;