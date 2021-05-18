require "csv"

CSV.foreach('db/content.csv', headers: true) do |row|
  Content.create(
    question: row['question'],
    answer:row['answer'],
    page: row['page'],
    difficult: row['difficult'],
    subject: row['subject'],
    original: row['original']
  )
end