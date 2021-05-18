class QuestionsController < ApplicationController

  before_action :search_product, only: [:index, :search]

  def index
    @products = Content.all
    set_product_column
  end

  def search
    @results = @p.result.to_sql
    @results2 = @p.result.to_sql
  end

  private

  def search_product
    @p = Content.ransack(params[:q])  # 検索オブジェクトを生成
      # grouping = @p.build_grouping
      # grouping.build_condition
      #   grouping1 = grouping.build_grouping
      #   grouping1.build_condition
  end

  def set_product_column
    @product_subject = Content.select("subject").distinct
  end

end
