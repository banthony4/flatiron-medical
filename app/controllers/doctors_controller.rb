class DoctorsController < ApplicationController
  
  def index
    render json: Doctor.all, status: :ok
  end

  def show
    doctor = Doctor.find(params[:id])
    render json: doctor, status: :ok
  end

  def create
    render json: Doctor.create!(doctor_params), status: :created
  end

  def update
    doctor = Doctor.find(params[:id])
    render json: doctor.update!(doctor_params), status: :created
  end

  def destroy
    doctor = Doctor.find(params[:id])
    doctor.destroy
    head :no_content
  end

  private

  def doctor_params
    params.permit(:title, :name, :bio, :email, :password)
  end
  
end
