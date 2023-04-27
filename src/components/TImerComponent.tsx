import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    O: string,
    Z: string,
    M: string
}

export function TimerComponent() {

    let [second, setSecond] = useState(0)
    let [minits, setMinits] = useState(0)
    let [hour, setHour] = useState(0)
    const [state, setState] = useState(false)
    const [finish, setFinish] = useState<State>({
        O: '',
        Z: '',
        M: ''
    })

    function Up() {
        setSecond(second += 1)
        if (second === 60) {
            setMinits(minits += 1)
            setSecond(second = 0)
        }
        else if (minits === 60) {
            setHour(hour += 1)
            setMinits(minits = 0)
        }
    }


    useEffect(() => {
        if (state) {
            const secondtimer = setInterval(Up, 1000)
            return () => clearInterval(secondtimer)
        }
    }, [state])

    function FinishO() {
        let time = `${hour}時間${minits}分${second}秒`
        setFinish({
            ...finish,
            O: time
        })
    }
    function FinishZ() {
        let time = `${hour}時間${minits}分${second}秒`
        setFinish({
            ...finish,
            Z: time
        })
    }
    function FinishM() {
        let time = `${hour}時間${minits}分${second}秒`
        setFinish({
            ...finish,
            M: time
        })
    }

    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                <Text fontSize={{ base: '7xl', lg: '9xl' }}>{hour}時間{minits}分{second}秒</Text>
                <Flex gap={'3rem'}>
                    <Button w={{ base: '10rem', lg: '15rem' }} h={'4rem'} onClick={() => setState(true)}>スタート</Button>
                    <Button w={{ base: '10rem', lg: '15rem' }} h={'4rem'} onClick={() => setState(false)}>ストップ</Button>
                    <Button w={{ base: '10rem', lg: '15rem' }} h={'4rem'} onClick={() => {
                        setHour(0), setMinits(0), setSecond(0)
                    }}>リセット</Button>
                </Flex>
                <Flex w={'80%'} justifyContent={'space-around'} marginTop={'30rem'} gap={'2rem'}>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text fontSize={'3xl'}>O</Text>
                        <Button onClick={() => FinishO()} w={'10rem'}>終了</Button>
                        <Text fontSize={{ base: '2xl', lg: '5xl' }}>{finish.O}</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text fontSize={'3xl'}>Z</Text>
                        <Button onClick={() => FinishZ()} w={'10rem'}>終了</Button>
                        <Text fontSize={{ base: '2xl', lg: '5xl' }}>{finish.Z}</Text>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                        <Text fontSize={'3xl'}>M</Text>
                        <Button onClick={() => FinishM()} w={'10rem'}>終了</Button>
                        <Text fontSize={{ base: '2xl', lg: '5xl' }}>{finish.M}</Text>
                    </Flex>
                </Flex>
                <Button marginTop={'3rem'} onClick={() => setFinish({
                    O: '',
                    Z: '',
                    M: ''
                })}>記録リセット</Button>
            </Flex>
        </>
    )
}