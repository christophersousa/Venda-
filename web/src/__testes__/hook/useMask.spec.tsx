import { useMask } from '../../hooks/useMask';

describe('Mask hook', () => {

    it('should be able to render an Mask CEP', () => {
        const {maskCep} = useMask()
        const cep = maskCep("85083")
       expect(cep).toBe("85083");
    });

    it('should be able to render an Mask CEP full', () => {
        const {maskCep} = useMask()
        const cep = maskCep("85083545")
       expect(cep).toBe("85083-545");
    });

    it(' Mask CPF initial', () => {
        const {maskCpf} = useMask()
        const cpf = maskCpf("88")
       expect(cpf).toBe("88");
    });

    it('should be able to render an Mask CPF more of 10 digits', () => {
        const {maskCpf} = useMask()
        const cpf = maskCpf("88888888")
       expect(cpf).toBe("888.888.88");
    });

    it('should be able to render an Mask CPF more of 6 digits', () => {
        const {maskCpf} = useMask()
        const cpf = maskCpf("88888")
       expect(cpf).toBe("888.88");
    });

    it('should be able to render an Mask CPF full', () => {
        const {maskCpf} = useMask()
        const cpf = maskCpf("88888888888")
       expect(cpf).toBe("888.888.888-88");
    });

    it('3 digit phone', () => {
        const {maskTelefone} = useMask()
        const telefone = maskTelefone("839")
       expect(telefone).toBe("(83) 9");
    });

    it('initial digit phone', () => {
        const {maskTelefone} = useMask()
        const telefone = maskTelefone("83")
       expect(telefone).toBe("83");
    });

    it('should be able to render an Mask telefone', () => {
        const {maskTelefone} = useMask()
        const telefone = maskTelefone("83988888888")
       expect(telefone).toBe("(83) 98888-8888");
    });
    it('should be able to render an Mask CNPJ initial ', () => {
        const {maskCnpj} = useMask()
        const cnpj = maskCnpj("88")
       expect(cnpj).toBe("88");
    });

    it('should be able to render an Mask CNPJ more than 3 digits ', () => {
        const {maskCnpj} = useMask()
        const cnpj = maskCnpj("8888")
       expect(cnpj).toBe("888.8");
    });

    it('should be able to render an Mask CNPJ more than 6 digits ', () => {
        const {maskCnpj} = useMask()
        const cnpj = maskCnpj("8888888")
       expect(cnpj).toBe("888.888.8");
    });

    it('should be able to render an Mask CNPJ more than 10 digits ', () => {
        const {maskCnpj} = useMask()
        const cnpj = maskCnpj("88888888888")
       expect(cnpj).toBe("888.888.888/88");
    });

    it('should be able to render an Mask CNPJ', () => {
        const {maskCnpj} = useMask()
        const cnpj = maskCnpj("88888888888888888")
       expect(cnpj).toBe("888.888.888/8888-88");
    });

    it('should be able to render an Mask data with 2', () => {
        const {maskDate} = useMask()
        const data = maskDate("29")
       expect(data).toBe("29");
    });

    it('should be able to render an Mask data > 3 and < 5', () => {
        const {maskDate} = useMask()
        const data = maskDate("2903")
       expect(data).toBe("29/03");
    });

    it('should be able to render an Mask data full', () => {
        const {maskDate} = useMask()
        const data = maskDate("29032000")
       expect(data).toBe("29/03/2000");
    });

    it('Date does not accept day greater than 31', () => {
        const {maskDate} = useMask()
        const data = maskDate("322")
       expect(data).toBe("32");
    });

    it('Date does not accept month greater than 12', () => {
        const {maskDate} = useMask()
        const data = maskDate("31132")
       expect(data).toBe("31/13");
    });

    it('date with one digits', () => {
        const {maskDate} = useMask()
        const data = maskDate("8")
       expect(data).toBe("8");
    });


});

