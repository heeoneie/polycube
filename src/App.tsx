import Editor from './components/Editor'
import { Box } from '@mui/material'

export default function App() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh', width: '100vw' }}
        >
            <Editor />
        </Box>
    )
}
