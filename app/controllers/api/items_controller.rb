class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: []

  def index
    render json: @menu.items.order(created_at: :desc)
  end

  def show
    render json: @item
  end

  def create
    item = @menu.items.new(item_params)

    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: 422
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors }, status: 422
    end
  end

  def destroy
    @item.destroy
  end

  private

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_item
    @item = @menu.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
