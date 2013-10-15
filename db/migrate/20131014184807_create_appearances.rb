class CreateAppearances < ActiveRecord::Migration
  def change
    create_table :appearances do |t|
      t.integer :game_id
      t.integer :player_id
      t.time :result_time

      t.timestamps
    end
  end
end
