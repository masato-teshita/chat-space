FactoryBot.define do
  
  factory :message do
    content {Faker::Lorem.sentence}
    image   { File.open("#{Rails.root}/public/images/sample1.jpeg")}
    user
    group
  end

end