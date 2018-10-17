class Api:GuestJoinTableController < ApplicationController


  def create
    @attendance = GuestJoinTable.new(guest_id: current_user.id, event_id: params[:id])

    if @attendance.save
      render "api/events/show"
    else
      render json: ["error from guest join table"]
    end
  end

  def destroy
    @attendance = current_user.events_attending.find(params[:id])
    @attendance.destroy
    render "api/events/index"
  end


end
