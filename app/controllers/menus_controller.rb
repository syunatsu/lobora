class MenusController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :update, :destroy]

  def top
    @menu = Menu.new
  end

  def index
    @foods = Menu.where(category_id: 1)
    @dolces = Menu.where(category_id: 2)
    @drinks = Menu.where(category_id: 3)
    @menu = Menu.new

    render "menus/_#{params[:name]}", locals: { foods: @foods, dolces: @dolces, drinks: @drinks }
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      redirect_back fallback_location: root_path
    else
      redirect_back fallback_location: root_path
    end
  end

  def show
    @menu = Menu.find(params[:id])
    @new_menu = Menu.new
  end

  def update
    @menu = Menu.find(params[:id])
    if @menu.valid?
      @menu.update(menu_params)
      redirect_to action: :show
    else
      redirect_back fallback_location: root_path
    end
  end

  def destroy
    @foods = Menu.where(category_id: 1)
    @dolces = Menu.where(category_id: 2)
    @drinks = Menu.where(category_id: 3)

    menu = Menu.find(params[:id])
    menu.destroy
    render "menus/_#{menu.category.name.downcase}", locals: { foods: @foods, dolces: @dolces, drinks: @drinks }
  end

  private

  def menu_params
    params.require(:menu).permit(:name, :explain, :recipe, :how_to, :price, :category_id, :image).merge(user_id: current_user.id)
  end
end
