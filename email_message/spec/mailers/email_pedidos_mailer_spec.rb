require "rails_helper"

RSpec.describe EmailPedidosMailer do
    context "testando criação do email a ser enviado para usuário:" do
        conteudo = '{"nome":"Christopher","email":"christophersousa2468@gmail.com","user":{"username":"Christopher Silva de Sousa","email":"christophersousa2468@gmail.com","address":{"id":1,"cep":"58083-545","uf":"PB","cidade":"João pessoa","bairro":"Bairro das industrias","logradouro":"Rua cidade campo de santana","numero":188,"complemento":"null"}},"produto":{"estoque":8,"valor":1800,"image":"null","nome":"Smartphone"}}'
        email = JSON.parse(conteudo)
        emailPedidosMailer = EmailPedidosMailer.email_pedidos_user(JSON.parse(conteudo)).deliver
        
        it "subject do email" do
            subjectCriado = "Seu produto: #{email['produto']['nome']}  foi adquirido por: #{email['user']['username']}"
            expect(emailPedidosMailer.subject).to eq(subjectCriado)
        end
        it "destinatário do email" do
            destinatario = email['email']
            expect(emailPedidosMailer.to[0]).to eq(destinatario)
        end
        it "remetente do email" do
            remetente = "alves.guilherme1357@gmail.com"
            expect(emailPedidosMailer.from[0]).to eq(remetente)
        end
    end
end    
    