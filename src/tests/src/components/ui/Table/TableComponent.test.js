import '@testing-library/jest-dom';

import { mount } from 'enzyme';
import { TableComponent } from '../../../../../components/ui/Table/TableComponent';
import { dummyData } from '../../../../dummyPlayList';

describe('Test TableComponent', () => {

    const columns = [ 'No', 'Test1', 'Test2', 'Test3'];
    const data = dummyData;
    
    test('should render the number of columns given', () => {
        const wrapper =  mount(
            <TableComponent
                columns={ columns }
                data={ data }
            />
        );

        const columnsComponents = wrapper.find('.MuiTableHead-root .MuiTableCell-head');
        expect( columnsComponents.length ).toBe( columns.length )
    });

    test('should make sure number of rows match data items given', () => {
        const wrapper =  mount(
            <TableComponent
                columns={ columns }
                data={ data }
            />
        );
        const rows = wrapper.find('.MuiTableBody-root .MuiTableRow-root')
        expect( rows.length ).toBe( data.length );
    })
    
})
