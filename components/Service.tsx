import React from "react"
import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react'

const Service = () => {
    return (
        <Flex id="features" mt={20} flexDirection="column" color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} justify="ceenter" align="center">
            <Flex flex={1} flexDirection="column" justify="center" align="center">
                <Text mt={2} fontSize="2xl" fontWeight="700" color="#6e6bbe"></Text>
                <Heading size="xl">Features That We</Heading>
                <Heading size="xl">Provide for You</Heading>
            </Flex>
            <Flex align="center" justify="center" width="80%" mt={10}>
                <Flex flexDirection={{ base: 'column', md: 'row' }}>
                    <Box flex={1} bg="#27771c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/money-flow.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>No Tax</Text>
                        <Text color="gray.400" mt={8}>
                        PepelonCeo will generate its revenue from NFT sales. This will enable the platform to offer many different NFT options to its users, which will create an opportunity to build a community among users. NFTs will allow users to showcase their creativity and sell their work on the platform, at the same time increasing the platform's revenue.
                        </Text>
                    </Box>
                    <Box flex={1} bg="#27771c" zIndex={1} display="none" borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/game-controller.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>No Tax</Text>
                        <Text color="gray.400" mt={8}>
                        </Text>
                    </Box>
                    <Box flex={1} bg="#27771c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/trophy.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>Weekly Contests</Text>
                        <Text color="gray.400" mt={8}>
                        Part of the proceeds from NFT trades will be used for weekly meme contests. These contests will allow community members to have fun and showcase their creativity. The contests aim to engage and build loyalty among community members by awarding prizes to participants who stand out for their original and creative humor content.
                        </Text>
                    </Box>
                    <Box flex={1} bg="#27771c" zIndex={1} borderRadius={15} m={2} p={10} align="center">
                        <Image src='/images/nft.svg' width="78px" />
                        <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>NFT Marketplace</Text>
                        <Text color="gray.400" mt={8}>
                        This NFT marketplace aims to bring together creators and collectors from all over the world to offer unique NFTs on the meme. Using blockchain technology, the platform aims to create a trusted environment between creators and collectors, ensuring ownership and security of unique digital assets.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Service;