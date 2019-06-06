class WomensRightsMailer < ApplicationMailer
    default :from => 'blessedbethepantsuit@gmail.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_welcome_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Thank you for visiting this site! ' )
  end
end