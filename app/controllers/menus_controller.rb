class MenusController < ApplicationController
  def index
  end

  def new
    @menu = Menu.new
  end

  def create
    binding.pry
    @menu = Menu.new(menu_params)
    if @menu.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def menu_params
    params.require(:menu).permit(:name, :explain, :recipe, :how_to, :price, :category_id, :image).merge(user_id: current_user.id)
  end
end
