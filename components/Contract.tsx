import React from "react"
import { Flex, Heading, Image, Text, useClipboard, Button  } from '@chakra-ui/react'

const Contract = () => {
    const { hasCopied: hasCopiedBsc, onCopy: onCopyBsc } = useClipboard('0xd1956c3Aa9F4caF6029735C2b886E76154Db11ec')
    const { hasCopied: hasCopiedHarmony, onCopy: onCopyHarmony } = useClipboard('0x13f7203b2e101858933b82df1fa13f81aaa38597')

    return (
        <Flex mt={32} mb={32} flexDirection="column" color="white" px={{ base: 0, md: 40 }} mx={{ base: 0, md: 10 }} justify="ceenter" align="center">
            <Flex flex={1} justify="center" align="center">
                <Image src="/images/logo-3d.png" w={20} mr={2} />
                <Heading size="xl">Contract Address</Heading>
            </Flex>
            <Flex align="center" justify="center" width="80%" mt={16}>
                <Flex flexDirection='column'>
                    <Flex alignItems="center">
                        <Text flexGrow={1} color="#68994a" fontSize="2xl" fontWeight="bold">BSC</Text>
                        <Text ml={6} fontSize="xl" color="gray.400" display={{ base: 'none', md: 'block' }} >0xd1956c3Aa9F4caF6029735C2b886E76154Db11ec</Text>
                        <Button onClick={onCopyBsc} ml={2} bg="transparent" color="white" _hover={{ backgroundColor: 'transparent'}}>
                            <Image src="/images/copy.svg" w={6} />
                        </Button>
                    </Flex>
                    <Flex alignItems="center">
                        <Text color="#15b4de" fontSize="2xl" display="none" fontWeight="bold">Polygon</Text>
                        <Text ml={6} fontSize="xl" color="gray.400" display="none" ></Text>
                        <Button onClick={onCopyHarmony} ml={2} bg="transparent" display="none" color="white" _hover={{ backgroundColor: 'transparent' }}>
                            <Image src="/images/copy.svg" w={6} />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Contract;