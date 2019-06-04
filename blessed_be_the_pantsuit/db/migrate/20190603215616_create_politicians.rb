class CreatePoliticians < ActiveRecord::Migration[5.2]
  def change
    create_table :politicians do |t|
      t.string :short_title
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :party
      t.string :twitter_account
      t.string :url
      t.string :contact_form
      t.string :state

      t.timestamps
    end
  end
end
