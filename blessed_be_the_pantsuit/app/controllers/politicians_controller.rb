class PoliticiansController < ApplicationController
    def index
     @politicians = Politician.all
     render json: @politicians
    end
   ​
    def show
     @politician = Politician.find(params[:id])
     render json: @politician
    end
end