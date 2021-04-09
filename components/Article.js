import { Card } from 'react-bootstrap'
import Link from 'next/link'

const Article = ({ article }) => {
  return (
    <Link href='/article[id]' as={`/article/${article.id}`}>
      <Card className='my-3 px-3 rounded'>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </Card>
    </Link>
  )
}

export default Article
