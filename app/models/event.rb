class Event < ApplicationRecord

    validates :date, :time, :max_cap, :boba_shop, :address, :city, :bio, :image, presence: true

    belongs_to :host,
    foreign_key: :host_id,
    class_name: 'User'

    has_one :guest_join_table,
    foreign_key: :event_id,
    class_name: 'GuestJoinTable'

    has_many :guests,
    through: :guest_join_table,
    source: :guest
end
