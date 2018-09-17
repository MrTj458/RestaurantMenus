10.times do |i|
  menu = Menu.create(name: "Menu #{i}")
  10.times do
    menu.items.create(name: Faker::Food.dish, price: Faker::Commerce.price)
  end
end
