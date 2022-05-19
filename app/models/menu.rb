class Menu < ApplicationRecord
  validates :name, presence: true, length: { maximum: 30 }
  validates :explain, presence: true, length: { maximum: 250 }
  validates :recipe, presence: true, length: { maximum: 400 }
  validates :how_to, presence: true, length: { maximum: 1000 }
  validates :price, presence: true, format: { with: /\A[0-9]+\z/ }
  validates :category_id, numericality: { other_than: 0, message: "can't be blank" }
  validate :validate_image

  belongs_to :user
  has_one_attached :image

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category

  def validate_image
    errors.add(:image, 'を1枚添付してください') unless image.attached?
  end
end
