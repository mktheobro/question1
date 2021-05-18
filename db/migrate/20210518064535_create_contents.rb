class CreateContents < ActiveRecord::Migration[6.0]
  def change
    create_table :contents do |t|
      t.text        :question,   null: false
      t.text        :answer,     null: false
      t.integer     :page,       null: false
      t.integer     :difficult,  null: false
      t.string      :subject,    null: false
      t.timestamps
    end
  end
end
