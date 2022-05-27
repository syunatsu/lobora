[
  ['natsumi@mail', 'natsumi', '111111'],
  ['syota@mail', 'syota', '111111']
].each do |mail, name, password|
  User.create!(
    { email: mail, nickname: name, password: password }
  )
end