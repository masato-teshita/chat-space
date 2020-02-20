class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group.users << current_user
  end
  def create
    if Group.new(group_params)
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end
end
