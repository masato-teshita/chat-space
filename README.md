# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string||

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :chats

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :chats