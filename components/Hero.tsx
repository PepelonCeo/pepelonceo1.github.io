import React, { useEffect, useRef } from "react"
import { Flex, Button, Text, Heading, Link, Image } from '@chakra-ui/react'
import TextLoop from "react-text-loop"
import { motion, useAnimation } from 'framer-motion'
import useOnScreen from "helpers/useOnScreen"

const Hero = () => {
    const controls = useAnimation();
    const rootRef = useRef(null);
    const onScreen = useOnScreen(rootRef);

    useEffect(() => {
        controls.start((custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.4,
                duration: 1,
                ease: "easeOut"
            }
        }));
    }, [controls, onScreen]);

    return (
        <Flex mt={10} color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} flexDirection={{ base: 'column-reverse', md: 'row'}}>
            <Flex flex={1} flexDirection="column" justify="center" align={{ base: 'center', md: 'flex-start' }}>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={0}>
                    <Heading size="3xl">No Tax</Heading>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={1}>
                    <Heading size="3xl" mt={4}>Lots of Fun</Heading>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={2}>
                    <Heading size="3xl" mt={4}>This is</Heading>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={3}>
                    <Heading size="3xl" mt={4} color="#68994a">
                        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                            <Text>Pepe</Text>
                            <Text>Elon</Text>
                            <Text>CEO</Text>
                        </TextLoop>
                    </Heading>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={4}>
                    <Text mt={6} fontSize="xl" color="gray.400" textAlign={{ base: 'center', md: 'left' }}>PepelonCeo is a revolutionary BSC-based meme token.</Text>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={5}>
                    <Text mt={1} fontSize="xl" color="gray.400" textAlign={{ base: 'center', md: 'left' }}> This project aims to combine an NFT </Text>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={6}>
                    <Text mt={1} fontSize="xl" color="gray.400">with popular meme culture.</Text>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={6}>
                    <Text mt={1} fontSize="xl" color="gray.400"></Text>
                </motion.div>
                <motion.div ref={rootRef} initial={{ opacity: 0, x: -50 }} animate={controls} custom={7}>
                    <Flex mt={6}>
                        <Link href="https://bridge.PepelonCeo.net" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                            <Button borderWidth={4} borderRadius={30} py={6} px={6} borderColor="#6e6bbe" bg="transparent" display="none" align="center" _hover={{ backgroundColor: '#6e6bbe', boxShadow: 'none' }} boxShadow="-4px 4px 4px #a0aec0">BRIDGE TOKENS</Button>
                        </Link>
                        <Link href="https://pancakeswap.finance/swap" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                            <Button ml={0} borderWidth={4} borderRadius={30} py={6} px={6} borderColor="#68994a" bg="transparent" align="center" _hover={{ backgroundColor: '#27771c', boxShadow: 'none' }} boxShadow="-3px 4px 4px #68994a">BUY NOW!</Button>
                        </Link>
                    </Flex>
                    <Flex mt={4}>
                        <Link href="https://meta-play.app/staking" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                            <Button borderWidth={4} borderRadius={30} py={6} px={6} w={'175px'} borderColor="#6e6bbe" bg="transparent" display="none" align="center" _hover={{ backgroundColor: '#6e6bbe', boxShadow: 'none' }} boxShadow="-4px 4px 4px #a0aec0">STAKE QDROP</Button>
                        </Link>
                        <Link href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x80dd860289d6dafa733c85a58d9f11707838687d" target="_blank" isExternal style={{ textDecoration: 'none' }}>
                            <Button ml={4} borderWidth={4} borderRadius={30} py={6} px={6} borderColor="#0aa8ff" bg="transparent" display="none" align="center" _hover={{ backgroundColor: '#0aa8ff', boxShadow: 'none' }} boxShadow="-4px 4px 4px #a0aec0">BUY QDROP</Button>
                        </Link>
                    </Flex>
                </motion.div>
            </Flex>
            <motion.div ref={rootRef} initial={{ opacity: 0, x: 0 }} animate={controls} custom={0}>
                <Flex align="center" justify="center">
                    <Image src="/images/blogging.svg" width={750} height={{ base: 450, md: 750}} alt="Blogging SVG" />
                </Flex>
            </motion.div>
        </Flex>
    );
};

export default Hero;