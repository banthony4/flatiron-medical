class PatientsController < ApplicationController
  before_action :is_doc
  
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
  private

  def patient_params
    params.permit(:name, :age, :birthdate, :email, :password)
  end
  
end
