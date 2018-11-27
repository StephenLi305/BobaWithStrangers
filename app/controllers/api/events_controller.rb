class Api::EventsController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def new
    @event = Event.new
  end

  def create
    # debugger

    @event = Event.new(event_params)
    @event.host_id = current_user.id
    if @event.save
      # hours = @event.time.hours

      render "api/events/show"
    else
      render json: @event.errors.full_messages
    end
  end

  def index
    @events = Event.all
  end

  def destroy
    @event = current_user.events_hosting.find(params[:id])
    @event.destroy
    render "api/events/index"
  end

  def update
    @event = current_user.events_hosting.find(params[:id])
    if @event.update(event_params)
      render "api/events/show"
    else
      render json: ["you're not the host"]
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  private
  def event_params
    params.require(:event).permit(:date, :time, :max_cap, :boba_shop, :address, :city, :bio, :image)
  end

end
