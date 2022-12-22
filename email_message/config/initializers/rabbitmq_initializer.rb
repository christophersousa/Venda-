class RabbitQueueService
    def self.logger
      Rails.logger.tagged('bunny') do
        @@_logger ||= Rails.logger
      end
    end

    def self.connection
      @@_connection ||= begin
        instance = Bunny.new(
          addresses: localhost,
          username: "Admin123XX_",
          password:  "mqadmin",
          vhost:     "myapp.consumer",
          automatically_recover: true,
          connection_timeout: 2,
          logger: RabbitQueueService.logger
        )
        instance.start
        instance
      end
    end

  end