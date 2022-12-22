class CreateProdutos < ActiveRecord::Migration[7.0]
  def change
    create_table :produtos do |t|
      t.integer :estoque
      t.decimal :valor
      t.string :nome

      t.timestamps
    end
  end
end
