class University < ApplicationRecord
  validates :name, :degree, presence: true
  # validates_with TimeValidator, fields: [:start_date, :end_date]

  # def TimeValidator(val)
  #   errors.add(:val, 'must be a valid datetime') if ((DateTime.parse(val) rescue ArgumentError) == ArgumentError)
  # end
end
