class MenusController < ApplicationController

  def top
  end

  def index
    @foods = Menu.find_by(category_id: 1)
    @dolces = Menu.find_by(category_id: 2)
    @drinks = Menu.find_by(category_id: 3)

    render "menus/_#{params[:name]}", locals: {foods: @foods, dolces: @dolces, drinks: @drinks}
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
