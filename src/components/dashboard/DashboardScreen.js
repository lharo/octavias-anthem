import React from 'react';
import { TableComponent } from '../ui/Table/TableComponent';
import { getStructuredDataByUserId } from '../../helpers/getStructuredDataByUserId';


export const DashboardScreen = () => {

    const columns = [ '#', 'Name', 'Artist', 'My Ranking', 'Global Ranking']
    const data = getStructuredDataByUserId( 1 );

    return (
        <>
            <TableComponent
                columns= { columns }
                data={ data }
            >
            </TableComponent>


        </>
    );
}
