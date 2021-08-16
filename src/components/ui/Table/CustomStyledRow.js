import React from 'react'
import { RatingComponent } from '../Rating/RatingComponent'
import { StyledTableCell, StyledTableRow } from './TableStyles'

export const CustomStyledRow = ({ item }) => {
    return (
        <>
            <StyledTableRow key={ item.name }>
                <StyledTableCell 
                    align="center"> 
                        {item.order_number} 
                </StyledTableCell>
                
                <StyledTableCell 
                    align="center">
                        {item.name}
                </StyledTableCell>
                
                <StyledTableCell 
                    align="center">
                        {item.artist}
                </StyledTableCell>

                <StyledTableCell 
                    align="center">
                        <RatingComponent
                            rating= { item.personal_ranking }
                            readOnly = { false }
                            name = { item.name }>
                        </RatingComponent>
                </StyledTableCell>

                <StyledTableCell 
                    align="center">
                        <RatingComponent
                            rating= { item.global_ranking }
                            readOnly = { true }
                            name = { item.name }>
                        </RatingComponent>
                </StyledTableCell>
            </StyledTableRow>
        </>
    )
}
