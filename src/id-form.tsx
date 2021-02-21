import React from 'react'
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface Props {  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void }

const IdForm: React.FC<Props> = ({  handleChange }) => {

    return (
        <Paper component="form">
            <InputBase
                placeholder="Search Google Maps"
                onChange={handleChange}
            />
            <IconButton  type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default IdForm