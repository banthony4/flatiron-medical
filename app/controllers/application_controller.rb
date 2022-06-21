class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  before_action :is_doc
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def current_user
    Doctor.find_by(id: session[:current_user])
  end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end
  
  def is_doc
    return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user.doc
  end

  private

  def record_invalid_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(notfound)
    render json: {error: "#{notfound.model} not found"}, status: :not_found
  end

end
