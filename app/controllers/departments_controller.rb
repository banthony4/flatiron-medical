class DepartmentsController < ApplicationController
  skip_before_action :authorize
  skip_before_action :is_doc

  def index
    render json: Department.all, status: :ok
  end

end
