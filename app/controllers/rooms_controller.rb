class RoomsController < ApplicationController
  def index
    render json: Room.all, status: :ok
  end

  def show
    room = Room.find(params[:id])
    render json: room, status: :ok
  end

  def create
    render json: Room.create!(room_params), status: :created
  end

  def update
    room = Room.find(params[:id])
    render json: room.update!(room_params), status: :created
  end

  def destroy
    room = Room.find(params[:id])
    room.destroy
    head :no_content
  end

  private

  def room_params
    params.permit(:text, :color)
  end
end
