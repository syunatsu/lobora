class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true, length: { maximum: 20 }

  has_many :menus

  # いいねされているかのメソッド
  def liked_by?(menu_id)
    likes.where(menu_id: menu_id).exists?
  end
end
