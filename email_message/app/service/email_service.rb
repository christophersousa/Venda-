class EmailService
    def initialize(value)
        puts value
        @email = JSON.parse(value)

        puts "[high] Consumed #{@email['nome']}"
        EmailPedidosMailer.email_pedidos_user(@email).deliver
    end
end