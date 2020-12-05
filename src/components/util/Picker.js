import React from 'react'
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
const Picker = props => {

    return (
        <div>
            
        <Autocomplete
        id="searchBar"
        key={props.data.length+'auto'}
        options={['All', ...new Set(props.data?.reduce((tags, obj) => tags.concat(obj.tags), []))]}
        multiple={false}
        onChange={props.handleChange}
        renderInput={(params) => (<TextField  {...params} label="Filter by project tag" margin="normal" variant="outlined" />)}
      />
        </div>
    )
}



export default Picker
