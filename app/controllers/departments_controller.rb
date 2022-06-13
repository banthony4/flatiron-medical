class DepartmentsController < ApplicationController
  skip_before_action :authorize
  
  def index
    render json: Department.all, status: :ok
  end

  def show
    department = Department.find(params[:id])
    render json: department, serializer: DepartmentDoctorsSerializer, status: :ok
  end

  def create
    render json: Department.create!(department_params), status: :created
  end

  def update
    department = Department.find(params[:id])
    render json: department.update!(department_params), status: :created
  end

  def destroy
    department = Department.find(params[:id])
    department.destroy
    head :no_content
  end

  private

  def department_params
    params.permit(:name)
  end
  
end
