config = Rails::Configuration.new
class ConectionRabbitmq
    def initialize
        conn = Bunny.new(:host => "localhost", :user => "mqadmin", :password => "Admin123XX_")
        conn.start

        # open a channel
        ch1 = conn.create_channel
        ch1.confirm_select

        # declare a queue
        hi_q = ch1.queue("FILA_OLA_PDIST_DURAVEL", :durable => true)
        hi_q.subscribe do |delivery_info, metadata, payload|
            EmailService.new(payload)
        end
    end
end