
import { render, fireEvent, getByPlaceholderText } from '@testing-library/react';
import { CarouselProduto } from '../../components/CarouselProduto';

import imageTest from '../../assets/logo_venda+.png'

describe('Carrousel component', () => {

    it('should be able to render an Carrousel', () => {
      const { container } = render(
        <CarouselProduto
            img1={imageTest}
            img2={imageTest}
            img3={imageTest}
          />
      );

      const img = container.querySelectorAll('.object-cover')

       expect(img.length).toBe(6);
    });


  });