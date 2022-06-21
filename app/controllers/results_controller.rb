class ResultsController < ApplicationController
  skip_before_action :authorize
  
  def index
    render json: Result.all, status: :ok
  end

  def show
    result = Result.find(params[:id])
    render json: result, serializer: resultDoctorsSerializer, status: :ok
  end

  def create
    render json: Result.create!(result_params), status: :created
  end

  def update
    result = Result.find(params[:id])
    render json: result.update!(result_params), status: :created
  end

  def destroy
    result = Result.find(params[:id])
    result.destroy
    head :no_content
  end

  private

  def result_params
    params.permit(:WBC, :RBC, :hemoglobin, :hematocrit, :platelets, :sodium, :potassium, :bun, :calcium, :patient_id)
  end
end
