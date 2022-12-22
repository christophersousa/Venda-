require_relative "boot"

require "rails/all"
require "bunny"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EmailMessage
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.autoload_paths << "#{Rails.root}/app/services"


  # Start a communication session with RabbitMQ
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
