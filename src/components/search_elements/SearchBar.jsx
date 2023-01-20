import SearchBox from "./SearchBox.jsx";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../themes/Theme';
import { useState } from "react";

const SearchBar = () => {

    const inputArray = [
        {
            id: 1,
            value: null
        }
    ];

    const [boxes, setSearchBoxes] = useState(inputArray);

    const addSearchBox = () => {
        setSearchBoxes((bs) => {
            return [...bs, { value: null }];
        })
    }

    const removeSearchBox = () => {
        setSearchBoxes((bs) => {
            bs.pop();
            return [...bs];
        })
    }

    return (
        <div className="SearchBar">
            <ThemeProvider theme={theme}>
                {
                    boxes.map(() => {
                        return <SearchBox />
                    })
                }
                <div className="SearchBarButtons">
                    <IconButton onClick={addSearchBox} aria-label="add Search box" color="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={removeSearchBox} aria-label="remove Search box" color="primary">
                        <RemoveIcon />
                    </IconButton>
                </div>
            </ThemeProvider>
        </div >
    )
}

export default SearchBar