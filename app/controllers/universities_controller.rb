class UniversitiesController < ApplicationController
  skip_before_action  :verify_authenticity_token
  before_action :find_university, :only => [:update, :destroy, :show]

  def index
    @universities = University.all
    #render json: @universities
  end

  def get_data
    @universities = University.all
    render json: @universities
  end

  def create
    @university = University.new university_params
    if @university.save
      render json: @university, success: "Added"
    else
      render json: @university, danger: "Something go worng, try again"
    end
  end

  def update
    @university.update university_params
    if @university.save
      render json: @university, success: "Changed"
    else
      render json: @university, danger: "Something go worng, try again"
    end
  end

  def destroy
    if @university.destroy
      render json: @university, success: "Deleted"
    else
      render json: @university, danger: "Something go worng, try again"
    end
  end

  def show
    
  end

  private
    def find_university
      @university = University.find(params[:id]) if params[:id]
    end

    def university_params
      params.require(:university).permit(:name, :degree, 
                                         :start_date, :end_date)
    end
end