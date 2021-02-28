import React from 'react'
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    handleClick: () => void
}

const IdForm: React.FC<Props> = ({ handleChange, handleClick }) => {

    return (
        <Paper component="form">
            <InputBase
                onChange={handleChange}
            />
            <IconButton  aria-label="search" onClick={handleClick}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default IdForm