import React from 'react'

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export const RatingComponent = ({ rating, readOnly, name }) => {
    const [value, setValue] = React.useState(rating);
    
    return (
        <>
            {
                !readOnly &&                 
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name= { `unique-rating${ name }` }
                        value={ value }
                        onChange={(event, newValue) => setValue(newValue)}
                    />
                </Box>
            }

            {
                readOnly && 
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={ value } readOnly />
                </Box>
            }
        </>
    )
}
