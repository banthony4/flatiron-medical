class DepartmentsController < ApplicationController
  skip_before_action :authorize

  def index
    render json: Department.all, status: :ok
  end

end
