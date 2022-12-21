import { render, fireEvent, getByPlaceholderText } from '@testing-library/react';
import { CarouselProduto } from '../../components/CarouselProduto';

import { DropDown } from '../../components/Dropdown';

describe('Dropdown component', () => {

    it('should be able to render an Dropdown', () => {
    const listValues = ["Computador", "Notebook", "Smartphone"]
      const { container } = render(
        <DropDown
            name={"Teste"}
            list={listValues}
          />
      );

      const numberValues = container.querySelectorAll('.dropdown-item')

       expect(numberValues.length).toBe(3);
    });


  });