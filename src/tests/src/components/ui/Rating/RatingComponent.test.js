import '@testing-library/jest-dom';

import { mount } from 'enzyme';
import { RatingComponent } from "../../../../../components/ui/Rating/RatingComponent";

describe('Test RatingComponent', () => {

    test('should update the clicked component when multiple are rendered', () => {
        const wrapper = mount( 
            <RatingComponent 
                rating={5}
                readOnly={false}
                name='test1'
            />
        );
        const currentStarsFilled = wrapper.find('.MuiRating-iconFilled').length;
        expect(currentStarsFilled).toBe(20);
        wrapper.find('#unique-ratingtest1-1').getDOMNode().click();
        wrapper.update();
        const updatedStarsFilled = wrapper.find('.MuiRating-iconFilled').length;
        expect(updatedStarsFilled).toBe(4);
    });

    test('should not be able to change when read only', () => {

        const wrapper = mount( 
            <RatingComponent 
                rating={5}
                readOnly={true}
                name='test1'
            />
        );
        const countOfReadOnly = wrapper.find('.MuiRating-readOnly').length;
        expect( countOfReadOnly ).toBe( 1 );
    });

})
