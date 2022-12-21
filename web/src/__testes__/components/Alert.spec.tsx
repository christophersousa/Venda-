import { render } from '@testing-library/react';


import { AlertMessage } from '../../components/AlertMessage';

describe('Alert component', () => {
    it('should be able to render an Alert message', () => {

      const { container } = render(
        <AlertMessage
            show={true}
            showAlert={()=> console.log('teste')}
            message="teste de alert"
            color='red'
          />
      );

      const text  = container.textContent || container.innerText;
       expect(text).toBe("teste de alert");
    });


  });