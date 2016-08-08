class UniversitiesController < ApplicationController
  before_filter :find_university, :except => [:index]

  def index
    @universities = University.all
    render json: @universities
  end

  def create
    @university = University.new university_params
    if @university.save
      render json: @universities, success: "Added"
    else
      render json: @universities, danger: "Something go worng, try again"
    end
  end

  def update
    @university.update university_params
    if @university.save
      render json: @universities, success: "Changed"
    else
      render json: @universities, danger: "Something go worng, try again"
    end
  end

  def destroy
    if @university.destroy
      render json: @universities, success: "Deleted"
    else
      render json: @universities, danger: "Something go worng, try again"
    end
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