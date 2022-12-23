require "rails_helper"

RSpec.describe EmailService do
    context "testando dados para o conteúdo do email:" do
        it "payload vindo como parâmetro" do
            payload = '{"nome":"Christopher","email":"christophersousa2468@gmail.com","user":{"username":"Christopher Silva de Sousa","email":"christophersousa2468@gmail.com","address":{"id":1,"cep":"58083-545","uf":"PB","cidade":"João pessoa","bairro":"Bairro das industrias","logradouro":"Rua cidade campo de santana","numero":188,"complemento":"null"}},"produto":{"estoque":8,"valor":1800,"image":"null","nome":"Smartphone"}}'
            emailService = EmailService.new(payload)
            expect(emailService.instance_variable_get(:@email)).to eq(JSON.parse(payload))
        end
    end
    context "testando dados para o conteúdo do email:" do
        it "estrutura do payload não vindo como string" do
            payload = {"nome":"Christopher","email":"christophersousa2468@gmail.com","user":{"username":"Christopher Silva de Sousa","email":"christophersousa2468@gmail.com","address":{"id":1,"cep":"58083-545","uf":"PB","cidade":"João pessoa","bairro":"Bairro das industrias","logradouro":"Rua cidade campo de santana","numero":188,"complemento":"null"}},"produto":{"estoque":8,"valor":1800,"image":"null","nome":"Smartphone"}}
            expect(payload.instance_of?(String)).not_to eq(true)
        end
    end
    context "testando dados para o conteúdo do email:" do
        it "variável email convertida para Hash" do
            payload = '{"nome":"Christopher","email":"christophersousa2468@gmail.com","user":{"username":"Christopher Silva de Sousa","email":"christophersousa2468@gmail.com","address":{"id":1,"cep":"58083-545","uf":"PB","cidade":"João pessoa","bairro":"Bairro das industrias","logradouro":"Rua cidade campo de santana","numero":188,"complemento":"null"}},"produto":{"estoque":8,"valor":1800,"image":"null","nome":"Smartphone"}}'
            emailService = EmailService.new(payload)
            expect(emailService.instance_variable_get(:@email).instance_of?(Hash)).to eq(true)
        end
    end
    context "testando dados para o conteúdo do email:" do
        it "payload vindo nulo" do
            payload = '{"nome":"Christopher","email":"christophersousa2468@gmail.com","user":{"username":"Christopher Silva de Sousa","email":"christophersousa2468@gmail.com","address":{"id":1,"cep":"58083-545","uf":"PB","cidade":"João pessoa","bairro":"Bairro das industrias","logradouro":"Rua cidade campo de santana","numero":188,"complemento":"null"}},"produto":{"estoque":8,"valor":1800,"image":"null","nome":"Smartphone"}}'
            emailService = EmailService.new(payload)
            expect(emailService.instance_variable_get(:@email)).not_to eq(nil)
        end 
    end       
end            