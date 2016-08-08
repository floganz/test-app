class CreateUniversity < ActiveRecord::Migration[5.0]
  def change
    create_table :universities do |t|
      t.string :name
      t.string :degree
      t.datetime :start_date
      t.datetime :end_time
    end
  end
end
