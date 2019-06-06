class PoliticiansController < ApplicationController
    
    def index
     @politicians = Politician.all
     render json: @politicians, status: :ok
    end

    def update

        if @politician.update(politician_params)
          redirect_to politician_path(@politician)
        else
          render :edit
        end
      end




      private
      def politician_cat
        @politician = Politician.find(params[:id])
      end
    
end