import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
    return (
        <Stack spacing={5} >
            <div>
                <h1>
                    Buttons
                </h1>
            </div>
            <Stack spacing={4} direction='row' >

                <Button variant="text">Button</Button>
                <Button variant="contained">Button</Button>
                <Button variant="outlined">Button</Button>

            </Stack>

            <Stack spacing={4} direction='row'>

                <Button variant="contained" color="success">Button</Button>
                <Button variant="contained" color="error">Button</Button>
                <Button variant="contained" color="inherit">Button</Button>
                <Button variant="contained" color="info">Button</Button>
                <Button variant="contained" color="primary">Button</Button>
                <Button variant="contained" color="secondary">Button</Button>
                <Button variant="contained" color="warning" onClick={() => alert("warrning")}>Button</Button>

            </Stack>

        </Stack>
    )
}