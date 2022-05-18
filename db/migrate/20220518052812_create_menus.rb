class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.string :name, null: false
      t.text :explain, null: false
      t.text :recipe, null: false
      t.text :how_to, null: false
      t.string :price, null: false
      t.integer :category_id, null: false
      t.references :user, null: false, foreign_key: true 
      t.timestamps
    end
  end
end
