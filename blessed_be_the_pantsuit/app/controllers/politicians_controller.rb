class PoliticiansController < ApplicationController
    
    def index
     @politicians = Politician.all
     render json: @politicians, status: :ok
    end
    
end