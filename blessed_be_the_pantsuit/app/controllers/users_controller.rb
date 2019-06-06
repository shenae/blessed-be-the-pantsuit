class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users, status: :ok
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)

      if @user.save
        redirect_to user_path(@user), notice: "New user added!"
        # of flash[:notice] = "New user was successfully created."
      else
        flash.now[:alert] = "Oops, there was a problem creating this account. Please try again." 
        # pops up only once on page for error message and then disappears when page is refreshed
        render :new
        #redirect_to new_user_path
      end
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