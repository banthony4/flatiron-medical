class ResultSerializer < ActiveModel::Serializer
  attributes :id, :WBC, :RBC, :hemoglobin, :hematocrit, :platelets, :sodium, :potassium, :bun, :calcium, :patient_id
end
