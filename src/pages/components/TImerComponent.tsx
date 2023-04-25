import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

type State = {
    list: Array<string>,
    time: boolean
}

export function TimerComponent() {

    let [second, setSecond] = useState(0)
    let [minits, setMinits] = useState(0)
    let [hour, setHour] = useState(0)
    const [state, setState] = useState<State>({
        list: [],
        time: false
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
        if (state.time) {
            const secondtimer = setInterval(Up, 1000)
            return () => clearInterval(secondtimer)
        }
    }, [state.time])


    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
                <Text fontSize={'9xl'}>{hour}:{minits}:{second}</Text>
                <Flex>
                    <Button onClick={() => setState({
                        ...state,
                        time: true
                    })}>スタート</Button>
                    <Button onClick={() => setState({
                        ...state,
                        time: false
                    })}>ストップ</Button>
                    <Button onClick={() => {
                        setHour(0), setMinits(0), setSecond(0), setState({
                            ...state,
                            time: false
                        })
                    }}>リセット</Button>
                </Flex>
                <Flex>
                    <Button
                        onClick={() => setState({
                            ...state,
                            list: [
                                ...state.list,

                            ]
                        })}
                    >終了</Button>
                </Flex>
                {state.list.map((v, idx) =>
                    <Box key={idx}>
                        <Text>{v}</Text>
                        <Button onClick={() => setState({
                            ...state,
                            list: state.list.filter((v, idx2) => idx !== idx2)
                        })}>削除</Button>
                    </Box>
                )}
            </Flex>
        </>
    )
}