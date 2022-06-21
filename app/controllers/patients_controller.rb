class PatientsController < ApplicationController
  skip_before_action :is_doc, only: [:create]
  skip_before_action :authorize, only: [:create]

  def index
    render json: Patient.all.order(:name), status: :ok
  end

  def show
    patient = Patient.find(params[:id])
    render json: patient, status: :ok
  end

  def create
    render json: Patient.create!(patient_params), status: :created
  end

  def destroy
    patient = Patient.find(params[:id])
    patient.destroy
    head :no_content
  end

  private

  def patient_params
    params.permit(:name, :age, :birthdate, :email, :password, :doc)
  end
  
end
