class MenusController < ApplicationController
  def index
  end

  def new
    @menu = Menu.new
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      redirect to root_path
    else
      render :new
    end
  end

  private
  def menu_params
    require.(:menu).permit(:name, :explain, :recipe, :how_to, :price, :cotegory_id, :image).merge(user_id: current_user.id)
  end
end
