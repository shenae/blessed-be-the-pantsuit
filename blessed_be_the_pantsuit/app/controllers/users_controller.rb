class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users, status: :ok
    end
  
    # def show
    #   begin
    #     @user = User.find(params[:id])
    #     render json: @user, status: :ok
    #   rescue ActiveRecord::RecordNotFound
    #     render json: { message: "no user matches" }, status: :not_found
    #   rescue Exception
    #     render json: { message: "there was some other error" }, status: :internal_server_error
    #   end
    # end
  
  end