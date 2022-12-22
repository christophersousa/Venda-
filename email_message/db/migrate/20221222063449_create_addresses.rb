class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.integer :id
      t.string :cep
      t.string :uf
      t.string :cidade
      t.string :bairro
      t.string :logradouro
      t.integer :numero
      t.string :complemento

      t.timestamps
    end
  end
end
