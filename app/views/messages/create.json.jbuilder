json.id @message.id
json.content @message.content
json.image @message.image_url
json.user_name @message.user.name.strftime("%Y年%m月%d日 %H時%M分")
json.created_at @message.created_at
