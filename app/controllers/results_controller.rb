class ResultsController < ApplicationController
  
  def index
    render json: Result.all, status: :ok
  end

end
