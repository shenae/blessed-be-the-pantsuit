class UsersController < ApplicationController
  #before_action only: [:show, :edit, :update, :destroy]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
    def index
      @users = User.all
      render json: @users, status: :ok
    end

    def show
      render json: @user
    end

    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end

    end

    def destroy
      @user.destroy
      render plain: "User deleted."
    end

    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

  private
  def user_params
    params.permit(:username, :password, :email, :city, :state)
    # when auth is created
    #params.require(:user).permit(:name, :email, :login)
  end

  def set_user
    @user = User.find(params[:id])
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