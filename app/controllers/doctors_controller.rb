class DoctorsController < ApplicationController
  skip_before_action :authorize
  skip_before_action :is_doc
  
  def index
    render json: Doctor.all, status: :ok
  end

  def show
    doctor = Doctor.find(params[:id])
    render json: doctor, status: :ok
  end

end
