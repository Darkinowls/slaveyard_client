import { TextField } from "@mui/material"
import { ThemeProvider } from "@mui/material"
import theme from '../../themes/Theme';

const SearchBox = () => {
    return (
        <div className="SearchBox">
            <ThemeProvider theme={theme}></ThemeProvider>
            <TextField label="Search box" color="primary" variant="outlined" />
            <ThemeProvider theme={theme}></ThemeProvider>
        </div>
    )
}

export default SearchBox