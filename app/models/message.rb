class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :content, precense: true, unless: :image?
end
