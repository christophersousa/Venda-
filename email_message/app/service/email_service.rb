class EmailService
    def initialize(value)
<<<<<<< HEAD
=======
        puts value
        @email = JSON.parse(value)
>>>>>>> a3143f653d8eddf8aba1c20ee24bc19af8449e74

        @email = JSON.parse(value)
        puts "[high] Consumed #{@email['nome']}"
        EmailPedidosMailer.email_pedidos_user(@email).deliver
    end
end