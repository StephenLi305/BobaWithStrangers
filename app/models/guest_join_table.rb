class GuestJoinTable < ApplicationRecord

  belongs_to :guest,
  foreign_key: :guest_id,
  class_name: 'User'

  belongs_to :event,
  foreign_key: :event_id,
  class_name: 'Event'

end
