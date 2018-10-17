require 'test_helper'

class Api::GuestJoinTablesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_guest_join_tables_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_guest_join_tables_destroy_url
    assert_response :success
  end

end
