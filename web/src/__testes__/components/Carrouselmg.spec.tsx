import { render, fireEvent, getByPlaceholderText } from '@testing-library/react';
import { Carousel } from '../../components/Carousel';

describe('Carrousel component', () => {

    it('should be able to render an Carrousel', () => {
      const { container } = render(
        <Carousel
          />
      );

      const img = container.querySelectorAll('.carousel-item')

       expect(img.length).toBe(3);
    });


  });