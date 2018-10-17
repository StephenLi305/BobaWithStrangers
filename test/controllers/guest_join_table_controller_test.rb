require 'test_helper'

class GuestJoinTableControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get guest_join_table_create_url
    assert_response :success
  end

  test "should get destroy" do
    get guest_join_table_destroy_url
    assert_response :success
  end

end
