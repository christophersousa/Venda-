class EmailPedidosMailer < ApplicationMailer

    def email_pedidos_user(email)
        @email = email
        puts email;
        mail(
            to: email['email'],
            subject: "Seu produto: #{@email['produto']['nome']}  foi adquirido por: #{@email['user']['username']}",
            content_type: "text/html",
            body: "<html>
                    <div>
                        <h1>Compra Realizada</h1>
                        <img style=\"width:20rem\" src=\"https://images-americanas.b2w.io/produtos/6168942561/imagens/computador-completo-intel-core-i5-8gb-ssd-240gb-monitor-led-19-5-hdmi-easypc-go/6168942561_1_large.jpg\">
                        <h2>Dados do produto</h2>
                        <ul>
                            <li>Nome do produto :#{@email['produto']['nome']}</li>
                            <li>Valor: #{@email['produto']['valor']}</li>
                            <li>Estoque: #{@email['produto']['estoque']}</li>
                        </ul>
                        <h2>Dados do produto</h2>
                            <ul>
                                <li>Nome do cliente: #{@email['user']['username']}</li>
                                <li>Email: #{@email['user']['email']}</li>
                                <li>Cep: #{@email['user']['address']['cep']}</li>
                                <li>Estado: #{@email['user']['address']['uf']}</li>
                                <li>Cidade: #{@email['user']['address']['cidade']}</li>
                                <li>Bairro: #{@email['user']['address']['bairro']}</li>
                                <li>Rua: #{@email['user']['address']['logradouro']}</li>
                                <li>numero: #{@email['user']['address']['numero']}</li>
                            </ul>
                    </div>
                    </html>"
          )
    end

end

