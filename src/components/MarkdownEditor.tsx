import { useEffect, useMemo, useState } from 'react'
import { Box, TextField, Typography, Paper } from '@mui/material'
import { marked } from 'marked'


const renderer = new marked.Renderer()

renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
    const slug = text.toLowerCase().replace(/\s+/g, '-')
    return `<h${depth} id="${slug}"><a href="#${slug}">${text}</a></h${depth}>`
}

marked.use({ renderer })

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('')

    const html = useMemo(() => marked.parse(markdown), [markdown])

    useEffect(() => {
        const handler = (e: Event) => {
            const el = e.currentTarget as HTMLElement
            navigator.clipboard.writeText(el.textContent || '')
        }

        const blockquotes = document.querySelectorAll('blockquote')
        blockquotes.forEach((el) => el.addEventListener('click', handler))

        return () => {
            blockquotes.forEach((el) => el.removeEventListener('click', handler))
        }
    }, [html])

    return (
        <Box display="flex" flexDirection="column" gap={4} p={4}>
            <TextField
                label="Markdown 입력"
                multiline
                minRows={6}
                fullWidth
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />

            <Typography variant="h6">렌더링 결과</Typography>

            <Paper variant="outlined" sx={{ p: 3 }}>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                    style={{ lineHeight: 1.6 }}
                />
            </Paper>
        </Box>
    )
}
