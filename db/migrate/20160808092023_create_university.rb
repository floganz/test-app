class CreateUniversity < ActiveRecord::Migration[5.0]
  def change
    create_table :universities do |t|
      t.string :name
      t.string :degree
      t.date :start_date
      t.date :end_date
    end
  end
end
