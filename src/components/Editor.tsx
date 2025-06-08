import { Component, createRef } from 'react'
import BaseTextArea from './BaseTextArea'
import { Button, Stack, Typography, Container } from '@mui/material'

type State = {
    result: string
}

export default class Editor extends Component<object, State> {
    textareaRef = createRef<HTMLTextAreaElement>()

    state: State = {
        result: '',
    }

    handleClear = () => {
        if (this.textareaRef.current) {
            this.textareaRef.current.value = ''
            this.setState({ result: '' })
        }
    }

    handleAnagramCheck = () => {
        const value = this.textareaRef.current?.value || ''
        const words = value.split(/\s+/).filter(Boolean)
        const map = new Map<string, string[]>()

        for (const word of words) {
            const sorted = word.split('').sort().join('')
            const group = map.get(sorted) || []
            group.push(word)
            map.set(sorted, group)
        }

        const anagramPairs = [...map.values()].reduce((acc, group) => {
            const n = group.length
            return acc + (n * (n - 1)) / 2 // 조합 nC2
        }, 0)

        this.setState({ result: `애너그램 쌍 개수: ${anagramPairs}` })
    }

    render() {
        return (
            <Container maxWidth="sm" sx={{ mt: 8 }}>
                <Stack spacing={2}>
                    <BaseTextArea
                        ref={this.textareaRef}
                        placeholder="단어를 입력하세요"
                        rows={8}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            resize: 'vertical',
                            fontFamily: 'monospace',
                        }}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={this.handleClear}>
                            초기화
                        </Button>
                        <Button variant="contained" onClick={this.handleAnagramCheck}>
                            애너그램 확인
                        </Button>
                    </Stack>
                    <Typography>{this.state.result}</Typography>
                </Stack>
            </Container>
        )
    }
}
