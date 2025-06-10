import { Box, Container, Paper, Typography } from '@mui/material'
import Editor from './components/Editor'
import MarkdownEditor from './components/MarkdownEditor'
import { findEulerianPath } from "./algorithm";
import { useEffect}  from "react";

export default function App() {
    useEffect(() => {
        const edges: [string, string][] = [
            ['A', 'B'],
            ['B', 'C'],
            ['B', 'D'],
            ['C', 'D']
        ]

        console.log(findEulerianPath(edges))
    }, [])
    return (
        <Container sx={{ py: 6 }}>
            <Box display="flex" flexDirection="row" gap={6}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        과제 1: 애너그램 쌍 개수 확인기
                    </Typography>
                    <Editor />
                </Paper>

                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        과제 2: 마크다운 렌더링 + Heading 앵커 & 인용문 복사
                    </Typography>
                    <MarkdownEditor />
                </Paper>
            </Box>
        </Container>
    )
}
