json.extract! event, :id, :date, :time, :max_cap, :host_id,
:boba_shop, :address, :city, :bio, :image

json.host do
  json.extract! event.host, :name
end
#
# json.event do
#   json.id @event.id
#   json.date @event.date
#   json.time @time
# end
